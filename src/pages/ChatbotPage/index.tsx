// React libs
import { useState } from "react";
// Components
import { FaCircleChevronRight, FaChevronDown } from "react-icons/fa6";
import { Message } from "./components/Messages";
import { CustomRedButton } from "@/components/Button";
import Search from "antd/es/input/Search";
// API
import { postChatBotGenerateStream } from "./api";
// Assets
import avatar1 from "@/assets/avatar1@3x.png";
import ChatbotIcon from "@/assets/ChatbotIcon.png";
// Hooks
import { useToast } from "@/hooks/useToast";
import useAuth from "@/hooks/useAuth";
import { useChatScroll } from "./hooks";
import { buttonData } from "./data";
// Types
import { MessageProps } from "./types";
import { UserInfoType } from "@/types/userTypes";
import { SearchProps } from "antd/es/input/Search"
// Utils
import { getUserAvatar } from "@/utils/userUtils";


// Todo: Optional - Add animation
export const ChatbotPage = () => {
	const { userInfo } = useAuth();

	// Antd Notification Hook
	const { ToastCreate } = useToast();

	// Array of messages
	const [messages, setMessages] = useState<MessageProps[]>([]);

	// Streaming Message State
	const [streamMessage, setStreamMessage] = useState<MessageProps>({
		profilePic: ChatbotIcon,
		message: "",
	});

	// State for input
	const [inputValue, setInputValue] = useState("");

	// state for checking if user scrolled up from latest message
	const [isBottom, setIsBottom] = useState<boolean>(true);

	// custom functions and refs from custom hook
	const {
		messageContainerRef,
		scrollBarContainerRef,
		handleClickScrollIntoView,
	} = useChatScroll({ messages, streamMessage });

	// Make api call to backend
	const handleApiCall = async (message: string) => {
		try {
			const stream = await postChatBotGenerateStream(message);
			let intermediateMessage = "";

			for await (const chunk of stream) {
				// const cleanChunk = chunk.split("data:")[1].trim();
				intermediateMessage += chunk;
				// Render stream message
				setStreamMessage((prevState) => ({
					...prevState,
					message: prevState.message + chunk,
				}));
			}

			// After the for-await loop, append the completed streamMessage into messages
			setMessages((prevMessages) => [
				...prevMessages,
				{
					profilePic: streamMessage.profilePic,
					message: intermediateMessage,
				},
			]);
			// Reset the streamMessage state
			setStreamMessage((prevState) => ({
				...prevState,
				message: "",
			}));
		} catch (err) {
			/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
			const error = err as { message: string };
			const errorMessageObject = JSON.parse(error.message);
			ToastCreate({
				message: "Status " + errorMessageObject.status,
				description: errorMessageObject.message,
				placement: "topRight",
				toastType: "error",
			});
			/* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
		}
	};

	// handleSearch input
	const handleSearch: SearchProps["onSearch"] = async (value, e) => {
		e?.preventDefault();

		if (inputValue !== "") {
			// Temp to store so that input can be cleared
			const temp = value;

			// Clear input
			setInputValue("");

			// Append to messages, user first
			if (userInfo) {
				setMessages((prevMessages) => [
					...prevMessages,
					{
						profilePic: userInfo
							? getUserAvatar(userInfo as UserInfoType)
							: avatar1,
						message: temp,
					},
				]);
			}

			await handleApiCall(temp);
		}
	};

	// function to set state when user is not at the bottom
	const handleScroll = () => {
		if (scrollBarContainerRef.current) {
			// Destruct relevants metrics
			const { scrollHeight, scrollTop, clientHeight } =
				scrollBarContainerRef.current;
			// Formula whether user is bottom of the scrollbar div
			setIsBottom(
				Math.round(scrollHeight - scrollTop - 40.66) <= clientHeight
			);
		}
	};

	// handle optionClick
	const handleOption = async ({
		e,
		title,
	}: {
		e: React.MouseEvent<HTMLElement>;
		title: string;
	}) => {
		e.preventDefault();
		if (userInfo) {
			setMessages((prevMessages) => [
				...prevMessages,
				{
					profilePic: userInfo
						? getUserAvatar(userInfo as UserInfoType)
						: avatar1,
					message: `Hello, I would like to learn about ${title}`,
				},
			]);
			await handleApiCall(`Hello, I would like to learn about ${title}`);
		}
	};

	return (
		// Todo: Add navbar
		<div className="relative h-[calc(100vh-3rem)] overflow-hidden">
			<div className="flex flex-col gap-9 w-full h-full justify-center items-center overflow-hidden py-8">
				<div
					className="flex-grow w-full h-full flex justify-center items-center overflow-y-auto sm:px-1 px-0 scrollbar-hide"
					onScroll={handleScroll}
					ref={scrollBarContainerRef}
				>
					<div className="w-full sm:w-3/5 h-full">
						{messages.length > 0 ? (
							<div
								ref={messageContainerRef}
								className={`w-full flex flex-col gap-7 my-4 flex-1`}
								onScroll={handleScroll}
							>
								{/* Message compnent will be mapped from state */}
								<Message
									profilePic={ChatbotIcon}
									message={
										"Hello, what do you want to know about more today?"
									}
								/>
								{messages.map((message, i) => (
									<Message
										key={i}
										profilePic={message.profilePic}
										message={message.message}
									/>
								))}
								{streamMessage.message !== "" && (
									<Message
										profilePic={streamMessage.profilePic}
										message={streamMessage.message}
									/>
								)}
							</div>
						) : (
							// Chatbot landing page
							<div className="flex h-full">
								<div className="flex flex-col justify-center items-center gap-2 m-auto">
									<div className="relative flex flex-col items-center text-center gap-2 bg-white p-4 rounded-lg">
										<img
											src={ChatbotIcon}
											className="absolute w-8 h-8 rounded-full -top-5"
										/>
										<span>Hi, its Bobby!</span>
										<span>
											What do you want to know about more
											today?
										</span>
									</div>

									<div className="flex flex-col gap-2">
										{buttonData.map((item) => (
											<CustomRedButton
												key={item.id}
												title={item.title}
												onClick={(e) =>
													handleOption({
														e,
														title: item.title,
													})
												}
											/>
										))}
									</div>
								</div>
							</div>
						)}
					</div>
					{!isBottom && (
						<button
							className={`absolute duration-100 z-50 rounded-full flex items-center justify-center w-10 h-10 bottom-24`}
							onClick={handleClickScrollIntoView}
						>
							<div className="flex-grow">
								<FaChevronDown />
							</div>
						</button>
					)}
				</div>
				{/* Use antdesign component */}
				<div className="w-full flex justify-center gap-1">
					<div className="w-full md:w-3/5 flex-grow-1 md:flex-grow-0 md:min-w-[330px]">
						<Search
							placeholder="Enter your message here"
							onSearch={handleSearch}
							enterButton={
								<div className="flex justify-center items-center">
									<FaCircleChevronRight />
								</div>
							}
							className="px-2"
							allowClear
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							disabled={Boolean(messages.length <= 0)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

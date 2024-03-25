import ChatbotIcon from "@/assets/ChatbotIcon.png";
import { FaCircleChevronRight, FaChevronDown } from "react-icons/fa6";
import { Message } from "./components/Messages";
import Search, { SearchProps } from "antd/es/input/Search";
import { useEffect, useRef, useState } from "react";
import { MessageProps } from "./components/Messages";
import { postChatBotGenerateStream } from "./api";
import { useToast } from "@/hooks/useToast";
import useAuth from "@/hooks/useAuth";
import { mockMessages } from "./data";

export const ChatbotPage = () => {
	// Todo, change profilePic to user.profile from firebase
	const { user } = useAuth();

	// Antd Notification Hook
	const { ToastCreate } = useToast();

	// Array of messages
	const [messages, setMessages] = useState<MessageProps[]>(mockMessages);

	// Streaming Message State
	const [streamMessage, setStreamMessage] = useState<MessageProps>({
		profilePic: ChatbotIcon,
		message: "",
	});

	// State for input
	const [inputValue, setInputValue] = useState("");

	// state for checking if user scrolled up from latest message

	const [isBottom, setIsBottom] = useState<boolean>(true);

	// ref for messageContainerDiv
	const messageContainerRef = useRef<HTMLDivElement | null>(null);

	// ref for scrollDiv
	const scrollBarContainerRef = useRef<HTMLDivElement | null>(null);

	// function to set state when user is not at the bottom
	const handleScroll = () => {
		if (scrollBarContainerRef.current) {
			// Destruct relevants metrics
			const { scrollHeight, scrollTop, clientHeight } =
				scrollBarContainerRef.current;
			// Formula whether user is bottom of the scrollbar div
			// console.log("ScrollHeight - scrollTop: " + (scrollHeight-scrollTop).toString())
			// console.log(clientHeight);
			setIsBottom(
				Math.round(scrollHeight - scrollTop - 40.66) <= clientHeight
			);
		}
	};

	const handleClick = (e:React.MouseEvent<HTMLElement>) =>{
		e.preventDefault();
		messageContainerRef.current?.scrollIntoView({ block: "end" });
	}

	// handleSearch input
	const handleSearch: SearchProps["onSearch"] = async (value, e) => {
		e?.preventDefault();

		if (inputValue !== "") {
			// Temp to store so that input can be cleared
			const temp = value;

			// Clear input
			setInputValue("");

			// Append to messages, user first
			if (user?.photoURL) {
				setMessages((prevMessages) => [
					...prevMessages,
					{
						profilePic: user.photoURL,
						message: temp,
					},
				]);
			}

			try {
				const stream = await postChatBotGenerateStream(temp);
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
			}
			/* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
		}
	};

	// When messge state is update, the user will be dragged to the bottom of chat.
	useEffect(() => {
		// Scroll to the bottom
		messageContainerRef.current?.scrollIntoView({
			block: "end",
			behavior: "smooth",
		});
	}, [messages]);

	// When the component is mounted, the view of the chat will be at the bottom of the scroll
	useEffect(() => {
		// Scroll to the bottom
		messageContainerRef.current?.scrollIntoView({ block: "end" });
	}, [streamMessage]);

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
						<div
							ref={messageContainerRef}
							className="w-full flex flex-col gap-7 my-4 flex-1"
							onScroll={handleScroll}
						>
							{/* Message compnent will be mapped from state */}
							<Message
								profilePic={ChatbotIcon}
								message={
									"Hello, what do you want to learn about? Heritage, drugs?"
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
					</div>
					{!isBottom && (
						<button
							className={`absolute duration-100 z-50 rounded-full flex items-center justify-center w-10 h-10 bottom-24`}
							onClick={handleClick}
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
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

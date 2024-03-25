import { useEffect, useRef } from "react";
import { MessageProps } from "../components/Messages";

interface UseChatScrollProps {
    messages: MessageProps[],
    streamMessage: MessageProps
}

/**
 * Custom hook for handling chat scrolling behavior.
 * @param {MessageProps[]} messages - The state array of messages in the chat.
 * @param {MessageProps} streamMessage - The state of message streamed in real-time.
 */
export const useChatScroll = ({messages, streamMessage}: UseChatScrollProps) => {

	// ref for messageContainerDiv
	const messageContainerRef = useRef<HTMLDivElement | null>(null);

	// ref for scrollDiv
	const scrollBarContainerRef = useRef<HTMLDivElement | null>(null);

    const handleClickScrollIntoView = (e:React.MouseEvent<HTMLElement>) =>{
		e.preventDefault();
		messageContainerRef.current?.scrollIntoView({ block: "end" });
	}

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
  return {messageContainerRef, scrollBarContainerRef, handleClickScrollIntoView}
}

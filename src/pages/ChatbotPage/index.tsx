import ChatbotIcon from "@/assets/ChatbotIcon.svg"
import DefaultProfile from "@/assets/DefaultProfile.svg";
import { FaCircleChevronRight } from "react-icons/fa6";
import { Message } from "./components/Messages"
import Search, { SearchProps } from "antd/es/input/Search";
import { useEffect, useRef, useState } from "react";
import { MessageProps } from "./components/Messages";

// Mock data
const mockMessages = [
  {
    profilePic: ChatbotIcon,
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"
  },
  {
    profilePic: DefaultProfile,
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"
  },
  {
    profilePic: ChatbotIcon,
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"
  },
  {
    profilePic: DefaultProfile,
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"
  },
  {
    profilePic: ChatbotIcon,
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"
  },
  {
    profilePic: DefaultProfile,
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"
  },
  {
    profilePic: ChatbotIcon,
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"
  },
  {
    profilePic: DefaultProfile,
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"
  },
  {
    profilePic: ChatbotIcon,
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"
  },
  {
    profilePic: DefaultProfile,
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"
  },
  {
    profilePic: ChatbotIcon,
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"
  },
]

// A prototype of chatbotpage
export const ChatbotPage = () => {
  // Array of messages
  const [messages, setMessages] = useState<MessageProps[]>(mockMessages);
  // State for input
  const [inputValue, setInputValue] = useState('');

  // ref for messageContainerDiv
  const messageContainerRef = useRef<HTMLDivElement | null>(null);

  // handleSearch input
  const handleSearch: SearchProps['onSearch'] = (value, e) => {
    e?.preventDefault();
    // Todo, change profilePic to user.profile from firebase
    
    if(inputValue !== ""){
      // Append to messages, user first
      setMessages(prevMessages => [...prevMessages,
        {
          profilePic: DefaultProfile,
          message: value
        }]
      );
      // Clear input
      setInputValue('');

      // Todo: Intergration of backend api to here
    }
  }

  // When messge state is update, the user will be dragged to the bottom of chat.
  useEffect(() =>{
    // Scroll to the bottom
    messageContainerRef.current?.scrollIntoView({ block: 'end',behavior: 'smooth'});
  },[messages]);

  // When the component is mounted, the view of the chat will be at the bottom of the scroll
  useEffect(() =>{
    // Scroll to the bottom
    messageContainerRef.current?.scrollIntoView({ block: 'end'});
  },[]);

  return (
    // Todo: Add navbar
    <div className="relative h-screen max-w-screen overflow-hidden">
      <div className="flex flex-col gap-9 w-full h-full justify-center items-center overflow-hidden py-8">
        <div className="flex-1 w-full h-full flex justify-center items-center overflow-y-auto px-2">
          <div className="min-w-[330px] w-3/5 h-full">
            <div ref={messageContainerRef} className="w-full flex flex-col gap-7 my-4 flex-1">
              {/* Message compnent will be mapped from state */}
              {messages.map((message, i) => <Message key={i} profilePic={message.profilePic} message={message.message} />)}
            </div>
          </div>
        </div>
        {/* Use antdesign component */}
        <div className="w-full flex justify-center gap-1">
          <div className="min-w-[360px] w-3/5">
            <Search placeholder="Enter your message here"
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
  )
}

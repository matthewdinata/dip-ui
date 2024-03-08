import Chatboticon from "@/assets/Chatboticon.svg"
import { IoMdPerson } from "react-icons/io";
import { FaCircleChevronRight } from "react-icons/fa6";
import { Message } from "./Components/Messages"
import Search, { SearchProps } from "antd/es/input/Search";
import { useState } from "react";
import { MessageProps } from "./Components/Messages";

// Mock data
const mockMessages = [
  {
    ProfilePic: Chatboticon,
    Message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"
  },
  {
    ProfilePic: IoMdPerson,
    Message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"
  },
  {
    ProfilePic: Chatboticon,
    Message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"
  },
  {
    ProfilePic: IoMdPerson,
    Message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"
  },
  {
    ProfilePic: Chatboticon,
    Message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"
  },
  {
    ProfilePic: IoMdPerson,
    Message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"
  },
  {
    ProfilePic: Chatboticon,
    Message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"
  },
  {
    ProfilePic: IoMdPerson,
    Message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"
  },
  {
    ProfilePic: Chatboticon,
    Message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"
  },
  {
    ProfilePic: IoMdPerson,
    Message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"
  },
  {
    ProfilePic: Chatboticon,
    Message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"
  },
]

// A prototype of chatbotpage
export const ChatbotPage = () => {
  

  // Array of messages
  const [messages, setMessages] = useState<MessageProps[]>(mockMessages);
  // State for input
  const [inputValue, setInputValue] = useState('')

  // handleSearch input
  const handleSearch: SearchProps['onSearch'] = (value, e) => {
    e?.preventDefault();
    // Todo, change profilepic to user.profile from firebase
    
    if(inputValue !== ""){
      // Append to messages, user first
      setMessages(prevMessages => [...prevMessages,
        {
          ProfilePic: IoMdPerson,
          Message: value
        }]
      );
      // Clear input
      setInputValue('');
      // Todo: Intergration of backend api to here
    }


  }

  return (
    // Todo: Add navbar
    <div className="relative h-screen max-w-screen overflow-hidden">
      <div className="flex flex-col gap-3 w-full h-full justify-center items-center overflow-hidden">
        <div className="flex-1 w-full h-full flex justify-center items-center overflow-y-auto">
          <div className="min-w-[360px] w-3/5 h-full">
            <div className="w-full flex flex-col gap-7 my-4 flex-1">
              {/* Message compnent will be mapped from state */}
              {messages.map(message => <Message ProfilePic={message.ProfilePic} Message={message.Message} />)}
            </div>
          </div>
        </div>
        {/* Use antdesign component */}
        <div className="w-full flex justify-center gap-1 p-2">
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

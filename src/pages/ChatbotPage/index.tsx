import Chatboticon from "@/assets/Chatboticon.svg"
import { IoMdPerson } from "react-icons/io";
import { FaCircleChevronRight } from "react-icons/fa6";
import { Message } from "./Components/Messages"
// A prototype of chatbotpage
export const ChatbotPage = () => {
  return (
    // Todo: Add navbar
    <div className="relative h-screen max-w-screen overflow-hidden">
      <div className="flex flex-col w-full h-full justify-center items-center overflow-hidden">
        <div className="flex-1 w-full h-full flex justify-center items-center overflow-y-auto">
          <div className="min-w-[360px] h-full w-3/5">
            <div className="w-full flex flex-col gap-7 my-4 flex-1">
              {/* Message compnent will be mapped from state */}
              <Message
                ProfilePic={Chatboticon}
                Message={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"}
              />
              <Message
                ProfilePic={Chatboticon}
                Message={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"}
              />
              <Message
                ProfilePic={IoMdPerson}
                Message={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"}
              />
              <Message
                ProfilePic={Chatboticon}
                Message={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"}
              />
              <Message
                ProfilePic={IoMdPerson}
                Message={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"}
              />
              <Message
                ProfilePic={Chatboticon}
                Message={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"}
              />
              <Message
                ProfilePic={IoMdPerson}
                Message={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"}
              />
              <Message
                ProfilePic={Chatboticon}
                Message={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"}
              />
              <Message
                ProfilePic={IoMdPerson}
                Message={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"}
              />
              <Message
                ProfilePic={Chatboticon}
                Message={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"}
              />
              <Message
                ProfilePic={IoMdPerson}
                Message={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"}
              />
              <Message
                ProfilePic={Chatboticon}
                Message={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"}
              />
              <Message
                ProfilePic={IoMdPerson}
                Message={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"}
              />
              <Message
                ProfilePic={Chatboticon}
                Message={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"}
              />
              <Message
                ProfilePic={IoMdPerson}
                Message={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nam nisi expedita ducimus suscipit deserunt odit debitis sunt hic ad tenetur laudantium fugiat perspiciatis fuga, ipsam, omnis dolorem ipsum. At?"}
              />
            </div>
          </div>
        </div>

        {/* Use antdesign component */}
        <div className="w-full flex justify-center gap-1 p-2">
          <input className="min-w-[300px] w-3/5 px-3 py-1"></input>
          <button className="p-0 h-full border w-[20px] flex items-center justify-center">
            <FaCircleChevronRight />
          </button>
        </div>
        
      </div>
    </div>
  )
}

import { IconType } from "react-icons/lib";

export interface MessageProps{
    ProfilePic: string | IconType;
    Message: string;
}

export const Message = ({ProfilePic, Message}: MessageProps) => {
    return (
        <div className={`flex gap-4 `}>
            {/* Profile */}
            <div className="rounded-full border p-1 w-10 h-10 flex items-center justify-center bg-white">
                {/* if profilepic prop is string, use img. Else, react dom */}
                {typeof ProfilePic === "string" ? <img src={ProfilePic} /> : <ProfilePic />}
            </div>
            {/* Message */}
            <div className="w-11/12 px-1 flex-1" >
                {Message}
            </div>
        </div>
    )
}

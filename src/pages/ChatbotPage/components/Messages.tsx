export interface MessageProps {
	profilePic: string;
	message: string;
}

export const Message = ({profilePic, message}: MessageProps) => {
    return (
        <div className={`flex gap-4`}>
            {/* Profile */}
            <div className="rounded-full border p-1 w-10 h-10 flex items-center justify-center dark:bg-#213547">
                <img src={profilePic} className="w-full h-full rounded-full"/>
            </div>
            {/* Message */}
            <div className="px-1 flex-1 min-w-11/12 " >
                {message}
            </div>
        </div>
    )
}

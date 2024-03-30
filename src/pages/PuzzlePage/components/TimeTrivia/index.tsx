import { IFrameRenderer } from "@/components/Layout"

export const TimeTriviaFrame = () => {
    return (
        <div className="relative w-full h-[calc(100vh-3.5rem)] flex items-center justify-center">
            <IFrameRenderer src="https://p.interacty.me/8db2598ddb2e41c3/iframe.html" width="1200px" height="550px" className="border-none" />
        </div>
    )
}

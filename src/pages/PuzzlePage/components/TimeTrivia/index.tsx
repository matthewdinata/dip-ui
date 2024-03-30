import { IFrameRenderer, MainScreenLayoutWrapper } from "@/components/Layout"

export const TimeTriviaFrame = () => {
    return (
        <MainScreenLayoutWrapper>
            <IFrameRenderer src="https://p.interacty.me/8db2598ddb2e41c3/iframe.html" className="w-full h-full border-none border-0" />
        </MainScreenLayoutWrapper>
    )
}

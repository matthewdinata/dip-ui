import { IFrameRenderer, MainScreenLayoutWrapper } from "@/components/Layout"

export const TimeTriviaFrame = () => {
    return (
        <MainScreenLayoutWrapper>
            <IFrameRenderer src="https://p.interacty.me/8db2598ddb2e41c3/iframe.html" width="1200px" height="550px" className="border-none" />
        </MainScreenLayoutWrapper>
    )
}

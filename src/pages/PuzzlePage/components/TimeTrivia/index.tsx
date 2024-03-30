import { IFrameRenderer, MainScreenLayoutWrapper } from "@/components/Layout"

export const TimeTriviaFrame = () => {
    return (
        <MainScreenLayoutWrapper>
            {/* Width and height must be 780px and 705px respectively to remove the internal margins */}
            <IFrameRenderer src="https://p.interacty.me/8db2598ddb2e41c3/iframe.html" additionalClassName="w-[780px] h-[705px] border-none border-0" />
        </MainScreenLayoutWrapper>
    )
}

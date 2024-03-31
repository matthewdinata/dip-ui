import { IFrameRenderer, MainScreenLayoutWrapper } from "@/components/Layout"
export const TimeTrekFrame = () => {
    return (
        <MainScreenLayoutWrapper>
            <IFrameRenderer title="Singapore Heritage Timeline Puzzle" additionalClassName="w-full h-full border-none border-0" src="https://view.genial.ly/65cb7fb08262760014e832db" typeof="text/html" allowFullScreen={true} />
        </MainScreenLayoutWrapper>
    )
}
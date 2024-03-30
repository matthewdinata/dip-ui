import { IFrameRenderer } from "@/components/Layout"
export const TimeTrekFrame = () => {
    return (
        <div className="relative w-full h-[calc(100vh-3.5rem)] flex items-center justify-center">
            <IFrameRenderer title="Singapore Heritage Timeline Puzzle" className="w-full h-full border-none" src="https://view.genial.ly/65cb7fb08262760014e832db" typeof="text/html" allowFullScreen={true} />
        </div>
    )
}
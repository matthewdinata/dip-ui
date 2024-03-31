import { IFrameRenderer, MainScreenLayoutWrapper } from "@/components/Layout"

export const CyberBullyingQuizFrame = () => {
  return (
    <MainScreenLayoutWrapper>
        <IFrameRenderer title="CyberBullying Quiz" additionalClassName="w-full h-full border-none border-0 shadow-none scrollbar-hide" src="https://docs.google.com/forms/d/e/1FAIpQLSduwIZFgi5drIk0b0VAHEtEWjW9tKjVVxms0YJTVDZOvWA_GA/viewform?embedded=true" typeof="text/html" allowFullScreen={true} />
    </MainScreenLayoutWrapper>
  )
}

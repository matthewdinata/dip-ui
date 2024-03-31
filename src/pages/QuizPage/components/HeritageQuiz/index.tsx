import { IFrameRenderer, MainScreenLayoutWrapper } from "@/components/Layout"

export const HeritageQuizFrame = () => {
  return (
    <MainScreenLayoutWrapper>
        <IFrameRenderer title="Heritage Quiz" additionalClassName="w-full h-full border-none border-0 shadow-none scrollbar-hide" src="https://docs.google.com/forms/d/e/1FAIpQLSdee7Xxjr4tAP8TGAnCRUIg5BLAVfPRPC5kslhqZoM50M3P3A/viewform?embedded=true" typeof="text/html" allowFullScreen={true} />
    </MainScreenLayoutWrapper>
  )
}

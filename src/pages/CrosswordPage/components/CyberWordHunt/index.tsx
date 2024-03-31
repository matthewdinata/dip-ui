import { IFrameRenderer, MainScreenLayoutWrapper } from "@/components/Layout"

export const CyberWordHunterFrame = () => {
  return (
    <MainScreenLayoutWrapper>
        <IFrameRenderer src="https://view.genial.ly/65cb8a04f6eacd0014571176" additionalClassName="w-[1200px] h-5/6 border-none" />
    </MainScreenLayoutWrapper>
  )
}

import { IFrameRenderer, MainScreenLayoutWrapper } from "@/components/Layout"

export const VapeQuestFrame = () => {
  return (
    <MainScreenLayoutWrapper>
        <IFrameRenderer src="https://puzzel.org/en/word-scramble/embed?p=-Nr8HsIfG29HIfJHCqKk" className="w-[1200px] h-full border-none" />
    </MainScreenLayoutWrapper>
  )
}

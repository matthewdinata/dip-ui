import { IFrameRenderer, MainScreenLayoutWrapper } from "@/components/Layout"

export const VapeQuizFrame = () => {
  return (
    <MainScreenLayoutWrapper>
        <IFrameRenderer title="Vaping Quiz" additionalClassName="w-full h-full border-none border-0 shadow-none scrollbar-hide" src="https://docs.google.com/forms/d/e/1FAIpQLSfN89u7PbacF--dHy3-M6WiJ5-y0mSElpll6MhY_yHSSowk8A/viewform?embedded=true" typeof="text/html" allowFullScreen={true} />
    </MainScreenLayoutWrapper>
  )
}

import { IFrameRenderer, MainScreenLayoutWrapper } from "@/components/Layout"

export const DrugQuizFrame = () => {
  return (
    <MainScreenLayoutWrapper>
      <IFrameRenderer title="Drug Quiz" additionalClassName="w-full h-full border-none border-0 shadow-none scrollbar-hide" src="https://docs.google.com/forms/d/e/1FAIpQLSfwytZYKTldmYdbptONKEuVoSguHkEqFgjhl99XhITs_CRvOw/viewform?embedded=true" typeof="text/html" allowFullScreen={true} />
    </MainScreenLayoutWrapper>
  )
}


// <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfwytZYKTldmYdbptONKEuVoSguHkEqFgjhl99XhITs_CRvOw/viewform?embedded=true" width="640" height="8784" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
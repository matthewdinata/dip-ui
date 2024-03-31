import { IFrameRenderer, MainScreenLayoutWrapper } from '@/components/Layout'

export const CyberSafeCrosswordsFrame = () => {
  return (
    <MainScreenLayoutWrapper>
        <IFrameRenderer src="https://crosswordlabs.com/embed/2024-02-13-258" additionalClassName="w-full h-full border-none" />
    </MainScreenLayoutWrapper>
  )
}

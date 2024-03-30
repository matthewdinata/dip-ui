import { FC, useEffect } from "react"
import { Link } from "react-router-dom"
import { IFrameRendererProps, MultiLinkLayerProps } from "./types"
import { useLoadedIframe } from "@/hooks/useLoadedIframe"
import { Spinner } from "../Spinner"

export const MultiLinkLayer = ({ title, linkToArray }: MultiLinkLayerProps) => {
  return (
    <div className="transition-transform ease-in-out scale-100 hover:scale-110 flex flex-col items-center justify-center bg-white border border-solid rounded-2xl p-6 gap-3 w-[13.5rem] h-56 lg:gap-9 lg:w-72 md:h-64">
      <h2 className="underline md:text-2xl lg:text-3xl text-[#ca3735]">{title}</h2>
      <div className="flex flex-col gap-4">
        {linkToArray.map((item) => <Link key={item.id} to={item.url} className="md:text-lg lg:text-xl text-[#5eaaa8] hover:text-[#80e7e4]">{item.title}</Link>)}
      </div>
    </div>
  )
}


export const IFrameRenderer: FC<IFrameRendererProps> = ({ ...attributes }) => {
  // Necessary function,state and ref from hook
  const { isIFrameLoaded, iframeRef, handleIframeLoad } = useLoadedIframe();
  useEffect(()=>{
    console.log(isIFrameLoaded)
  },[isIFrameLoaded])
  return (
    <>
      {!isIFrameLoaded && <Spinner />}
      <iframe
        ref={iframeRef}
        onLoad={handleIframeLoad}
        {...attributes}
        width="1200px" 
        height="550px"
      ></iframe>
    </>
  );
};
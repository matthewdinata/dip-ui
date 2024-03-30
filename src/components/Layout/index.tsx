import { FC, ReactNode} from "react"
import { IFrameRendererProps, MultiLinkLayerProps } from "./types"
import { useLoadedIframe } from "@/hooks/useLoadedIframe"
import { Spinner } from "../Spinner"
import { SetURLSearchParams } from "react-router-dom"

export const MultiLinkLayer = ({ title, linkToArray,setSearchParams}: MultiLinkLayerProps) => {
  return (
    <div className="transition-transform ease-in-out scale-100 hover:scale-110 select-none flex flex-col items-center justify-center bg-white border border-solid rounded-2xl p-6 gap-3 w-[13.5rem] h-56 lg:gap-9 lg:w-72 md:h-64">
      <h2 className="underline md:text-2xl lg:text-3xl text-[#ca3735] cursor-default">{title}</h2>
      <div className="flex flex-col gap-4">
        {linkToArray.map((item) => <MultiLinkChild key={item.id} title={item.title} param={item.param} setSearchParams={setSearchParams}/> )}
      </div>
    </div>
  )
}

const MultiLinkChild = ({title,param,setSearchParams}:{title:string, param:string, setSearchParams:SetURLSearchParams}) =>{
  const handleOnClick = (e:React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    setSearchParams({game:param});
  }
  return (
    <span onClick={handleOnClick} className="md:text-lg lg:text-xl text-[#5eaaa8] hover:text-[#80e7e4] cursor-pointer">{title}</span>
  )
}

export const IFrameRenderer: FC<IFrameRendererProps> = ({ ...attributes }) => {
  // Necessary function,state and ref from hook
  const { isIFrameLoaded, iframeRef, handleIframeLoad } = useLoadedIframe();
  return (
    <>
      {!isIFrameLoaded && <Spinner />}
      <iframe
        ref={iframeRef}
        onLoad={handleIframeLoad}
        {...attributes}
      ></iframe>
    </>
  );
};

export const MainScreenLayoutWrapper = ({children}:{children:ReactNode}) => {
  // This wrapper is for the div under navbar
  return (
    <div className="relative w-full h-[calc(100vh-3.5rem)] py-2 flex items-center justify-center">
      {children}
    </div>
  )
}
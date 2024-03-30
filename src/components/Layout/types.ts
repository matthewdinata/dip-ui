import { LinkToGameType } from "@/types/linkToGame";
import { SetURLSearchParams } from "react-router-dom";

export interface IFrameRendererProps extends React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> {
    // Feel free to add more props to this
}

export interface MultiLinkLayerProps {
    title: string
    linkToArray: LinkToGameType[],
    setSearchParams: SetURLSearchParams;
}
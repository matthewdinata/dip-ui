import { useRef, useState } from "react"

export const useLoadedIframe = () => {
    // A custom hook to check whether an Iframe is loaded
    const [isIFrameLoaded, setIsIFrameLoaded] = useState<boolean>(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    // Feel free to add more logic into the ref
    const handleIframeLoad = () => {
        setIsIFrameLoaded(true);
    };

    return { isIFrameLoaded, handleIframeLoad, iframeRef };
}

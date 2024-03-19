import { NotificationArgsProps, notification } from "antd";
import { ReactNode, createContext } from "react";

type NotificationPlacement = NotificationArgsProps["placement"];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface ToastProviderProps{
    children: ReactNode;
}

type ToastTypes = {
    message: string,
    description: string,
    placement: NotificationPlacement,
    toastType: NotificationType
}

interface ToastContextDefaultValue {
    ToastCreate: ({ message, description, placement, toastType }: ToastTypes) => void;
}

export const ToastContext = createContext<ToastContextDefaultValue|undefined>(undefined);

export function ToastProvider({ children }:ToastProviderProps) {

    const [api, contextHolder] = notification.useNotification();

    const ToastCreate = ({message,description,placement,toastType}:ToastTypes) =>{
        api[toastType]({
            message: message,
            description: description,
            placement: placement
        })
    }

    const values: ToastContextDefaultValue = {
        ToastCreate,
      };

	return (
    <ToastContext.Provider value={values}> 
        {contextHolder}
        {children} 
    </ToastContext.Provider>
    );
}
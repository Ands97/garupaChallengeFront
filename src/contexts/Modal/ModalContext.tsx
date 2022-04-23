import { createContext, Dispatch, SetStateAction } from "react";


export type ModalContextType = {
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
}

export const ModalContext = createContext<ModalContextType>(null!);
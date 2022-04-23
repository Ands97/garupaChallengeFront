import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { ModalContext } from "./ModalContext";

export const ModalProvider = ({ children }: { children: JSX.Element }) => {
    
    const [showModal, setShowModal] = useState(false)

    return (
        <ModalContext.Provider value={{ showModal, setShowModal }}>
            {children}
        </ModalContext.Provider>
    );
};

import { createContext, useState, useContext } from "react";
import { Modal } from "../components";

export const ModalContext = createContext({
    isOpen: false,
    data: {},
    setData: () => {},
    toggleModal: () => {}
});

export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState({});
    const toggleModal = () => setIsOpen(props => !props);

    return (
        <>
            <ModalContext.Provider value={{
                isOpen,
                toggleModal,
                data,
                setData
            }}>
                {children}
            </ModalContext.Provider>

            {isOpen && (
                <Modal 
                    isModalOpen={isOpen}    
                    data={data}
                    toggleModal={toggleModal} 
                />
            )}
        </>
    )
}

export const useModal = () => {
    const modalContext = useContext(ModalContext);
  
    if (!modalContext) {
      throw new Error(
        "useModal has to be used within <ModalContext.Provider>"
      );
    }
  
    return modalContext;
}
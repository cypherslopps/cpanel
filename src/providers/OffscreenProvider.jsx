import { createContext, useState, useContext } from "react";
import { OffScreen } from "../components";

export const OffscreenContext = createContext({
    isOpen: false,
    toggleOffscreen: () => {}
});

export const OffscreenProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOffscreen = () => setIsOpen(props => !props);

    return (
        <>
            <OffscreenContext.Provider value={{
                isOpen,
                toggleOffscreen
            }}>
                {children}
            </OffscreenContext.Provider>

            {isOpen && (
                <OffScreen 
                    isOffscreenOpen={isOpen}
                    toggleOffscreen={toggleOffscreen}
                />
            )}
        </>
    )
}

export const useOffscreen = () => {
    const offscreenContext = useContext(OffscreenContext);
  
    if (!offscreenContext) {
      throw new Error(
        "useOffscreen has to be used within <OffscreenContext.Provider>"
      );
    }
  
    return offscreenContext;
}
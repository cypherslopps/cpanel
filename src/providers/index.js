import { ModalProvider } from "./ModalProvider";
import { OffscreenProvider } from "./OffscreenProvider";
import { AuthProvider } from "./AuthProvider";


const AppProviders = ({ children }) => {
    return (
    <OffscreenProvider>
        <ModalProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </ModalProvider>
    </OffscreenProvider>
    )
}

export default AppProviders;
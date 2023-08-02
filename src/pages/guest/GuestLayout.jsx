import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { GuestNavigation, Loader, NotFound, TelegramButton } from "../../components";
import { APP_NAME } from "../../config";

const Home = lazy(() => import("./Home"));
const API = lazy(() => import("./API"));
const HowToUse = lazy(() => import("./HowToUse"));
const Services = lazy(() => import("./Services"));

function Guest() {
    const { pathname } = useLocation();
    const navigationVariant = pathname === "/" ? "transparent" : "bg";

    return (
        <main className="h-screen grid grid-rows-[1fr,max-content]">
            <GuestNavigation variant={navigationVariant} />
        
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="api" element={<API />} />
                    <Route path="how-to-use" element={<HowToUse />} />
                    <Route path="services" element={<Services />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>

            {/* Telegram Button */}
            <TelegramButton />

            {/* Footer */}
            <footer className="footer p-2.5 sm:p-4 flex items-center justify-center text-sm sm:text-md md:text-[.9rem] text-gray-700 capitalize bg-gray-100">
                &copy; copyright {APP_NAME} 2015 - {(new Date()).getFullYear()}. All rights reserved.
            </footer>
        </main>
    )
}

export default Guest;
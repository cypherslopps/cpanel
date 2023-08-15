import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { 
    DashboardNavigation,
    DashboardSidebar,
    NotFound,
    Loader
} from "../../components";
import useFetch from '../../hooks/useFetch';

const Orders = lazy(() => import("./Orders"));
const AccountSettings = lazy(() => import("./AccountSettings"));
const MassOrder = lazy(() => import("./MassOrder"));
const BookOrder = lazy(() => import("./BookOrder"));
const AddFunds = lazy(() => import("./AddFunds"));
const TicketSupport = lazy(() => import("./TicketSupport"));

function Dashboard() {
    // Fetch services
    useFetch();

    // Redirect user to login if token doesn't exits
    const token = Cookies.get("token");

    if(!token) 
        return (<Navigate to="/accounts/login" replace />);
    
    return (
        <main className="md:grid md:grid-cols-dashboard-md lg:grid-cols-dashboard-lg xl:grid-cols-dashboard-xl relative">
            <DashboardSidebar />

            {/* Dashboard content */}
            <section className="px-2 sm:px-4 lg:px-6 space-y-4 xs:space-y-6 sm:space-y-8 pb-5">
                {/* Dashboard Navigation */}
                <DashboardNavigation />

                {/* Content */}
                <main>
                    <Suspense fallback={<Loader />}>
                        <Routes>
                            <Route index element={<Orders />} />
                            <Route path="account" element={<AccountSettings />} />
                            <Route path="orders/mass-order" element={<MassOrder />}  />
                            <Route path="orders/book-order" element={<BookOrder />} />
                            <Route path="add-funds" element={<AddFunds />} />
                            <Route path="ticket-support" element={<TicketSupport />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Suspense>
                </main>
            </section>
        </main>
    )
}

export default Dashboard;
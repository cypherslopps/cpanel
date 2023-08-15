import React from 'react';
import { 
    Routes, 
    Route, 
    Link, 
    useLocation,
    Navigate, 
} from "react-router-dom";
import { Title, Subtitle } from '@tremor/react';
import { 
    AirplayIcon,
    AlignVerticalJustifyCenter,
    Fingerprint,
} from 'lucide-react';
import Cookies from 'js-cookie';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import ConfirmMail from './ConfirmMail';
import BackLoginButton from '../../components/BackLoginButton';
import MailImage from "../../assets/images/mail.jpg"
import { checkPath } from '../../lib/utils';
import { NotFound } from '../../components';

function Accounts() {
    const { pathname } = useLocation();
    let headerContent = null;
    let footerContent = null;

    // Redirect user to dashboard if token exits
    const token = Cookies.get("token");

    if(token) 
        return <Navigate to="/dashboard" replace />

    if(checkPath("login", pathname)) {
        headerContent = (
            <>
                <span className='w-10 h-[2.4rem] border border-gray-500/10 rounded-md flex items-center justify-center mb-2'>
                    <AirplayIcon className='w-[1.12rem] h-[1.12]' />
                </span>
                <Title className='text-[.98rem] xs:text-base sm:text-tremor-title font-bold text-black'>Resume your experience</Title>
                <Subtitle className='text-[.76rem] xs:text-[.78rem] sm:text-[.83rem] text-gray-600/80 text-center'>Lorem ipsum dolor sit amet consectetur</Subtitle>
            </>
        );

        footerContent = (
            <>
                <span className="text-[.73rem] sm:text-[.8rem] md:text-[.83rem] text-gray-600/80">Don't have an account yet?</span>
                <Link 
                    to="/accounts/register" 
                    className="text-[.73rem] sm:text-[.8rem] md:text-[.83rem] text-primary-500 underline"
                >
                    Create an account
                </Link>
            </>
        )
    } else if(checkPath("register", pathname)) {
        headerContent = (
            <>
                <span className='w-10 h-[2.4rem] border border-gray-500/10 rounded-md flex items-center justify-center mb-2'>
                    <AlignVerticalJustifyCenter className='w-[1.12rem] h-[1.12]' />
                </span>
                <Title className='text-[.98rem] xs:text-base sm:text-tremor-title font-bold text-black'>Get access to unlimited possiblities</Title>
                <Subtitle className='text-[.76rem] xs:text-[.78rem] sm:text-[.83rem] text-gray-600/80 text-center'>Lorem ipsum dolor sit amet consectetur</Subtitle>
            </>
        );

        footerContent = (
            <>
                <span className="text-[.73rem] sm:text-[.8rem] md:text-[.83rem] text-gray-600/80">Already have an account?</span>
                <Link 
                    to="/accounts/login"
                    className="text-[.73rem] sm:text-[.8rem] md:text-[.83rem] text-primary-500 underline"
                >
                    Sign in
                </Link>
            </>
        )
    } else if(checkPath("password", pathname)) {
        headerContent = (
            <>
                <span className='w-10 h-[2.4rem] border border-gray-500/10 rounded-md flex items-center justify-center mb-2'>
                    <Fingerprint className='w-[1.12rem] h-[1.12]' />
                </span>
                <Title className='text-[.98rem] xs:text-base sm:text-tremor-title font-bold text-black'>Forgot password?</Title>
                <Subtitle className='text-[.76rem] xs:text-[.78rem] sm:text-[.83rem] text-gray-600/80 text-center'>No worries, we'll send you reset instructions</Subtitle>
            </>
        );

        footerContent = (
            <BackLoginButton />
        )
    } else if(checkPath("reset", pathname)) {
        headerContent = (
            <>
                <span className='w-10 h-[2.4rem] border border-gray-500/10 rounded-md flex items-center justify-center mb-2'>
                    <Fingerprint className='w-[1.12rem] h-[1.12]' />
                </span>
                <Title className='text-[.98rem] xs:text-base sm:text-tremor-title font-bold text-black'>Set new password</Title>
                <Subtitle className='text-[.76rem] xs:text-[.78rem] sm:text-[.83rem] text-gray-600/80 text-center'>Must be at least 8 character long</Subtitle>
            </>
        );

        footerContent = (
            <BackLoginButton />
        )
    } else if(checkPath("confirm-mail", pathname)) {
        headerContent = (
            <>
                <img src={MailImage} alt="mail" className='w-32 h-20 sm:w-36 sm:h-24 lg:w-40 lg:h-28 -mb-2' />
                <Title className='text-[.98rem] xs:text-base sm:text-tremor-title font-bold text-black'>Confirm your mail</Title>
                <Subtitle className='text-[.76rem] xs:text-[.78rem] sm:text-[.83rem] text-gray-600/80 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae molestias eveniet rerum maxime.</Subtitle>
            </>
        );

        footerContent = (
            <BackLoginButton />
        )
    }

    return (
        <main className='h-screen flex items-center justify-center'>
            <div className={`w-[95%] xxs:w-[92%] xs:w-[85%] sm:w-[26rem] max-w-28 flex flex-col ${!(checkPath("login", pathname) || checkPath("register", pathname)) ? "gap-y-4 lg:gap-y-5" : "gap-y-4 md:gap-y-5 lg:gap-y-7"} xs:px-3 sm:px-0`}>
                <header className='flex flex-col items-center'>
                    {headerContent}
                </header>
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="password" element={<ForgotPassword />} />
                    <Route path="/password/reset" element={<ResetPassword />} />
                    <Route path="/confirm-mail" element={<ConfirmMail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <footer className={`flex justify-center gap-x-1 ${!(checkPath("login", pathname) || checkPath("register", pathname)) ? "-mt-3" : "-mt-0.5"}`}>
                    {footerContent}
                </footer>
            </div>
        </main>
    )
}

export default Accounts
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Input } from '../../components'
import Button from '../../components/ui/Button';
import { validateEmail, validatePassword, isValid } from '../../lib/validation';
import useForm from '../../hooks/useForm';


function Login() {
    const {formInputs: login, setFormInputs: setLogin, handleChange} = useForm({
        email: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    function loginUser(e) {
        e.preventDefault();
        
        if(isValid(login) && !emailError && !passwordError) {
            // Set loading state to true
            setIsLoading(true);

            try {

            } catch(e) {
                return e 
            } finally {
                setTimeout(() => setIsLoading(false), 500);
            }
        }
    }

    return (
        <form className='flex flex-col gap-y-3.5' onSubmit={loginUser}>
            <Input 
                label="Email"
                name="email"
                placeholder="Enter your email"
                error={emailError}
                onChange={handleChange}
                onBlur={({ target }) => validateEmail(target.value, setEmailError)}
                value={login.email}
            />

            <Input 
                label="Password"
                name="password"
                type="password"
                placeholder="••••••••••••"
                error={passwordError}
                onChange={handleChange}
                onBlur={({ target }) => validatePassword(target.value, setPasswordError)}
                value={login.password}
            />

            <Link to="/accounts/password" className='text-xs sm:text-[.8rem] underline text-primary-500 text-end block'>Forgot password?</Link>
            
            <Button 
                type="submit" 
                width="full"
                isLoading={isLoading}
            >
                Sign in
            </Button>
        </form>
    )
}

export default Login
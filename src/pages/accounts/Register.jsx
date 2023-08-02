import React, { useState } from 'react'
import { Input } from '../../components'
import Button from '../../components/ui/Button';
import { validatePassword, validateEmail, validateText, isValid } from '../../lib/validation';
import useForm from '../../hooks/useForm';

function Register() {
    const {formInputs: register, setFormInputs: setRegister, handleChange} = useForm({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    function registerUser(e) {
        e.preventDefault();
        
        if(isValid(register) && !emailError && !passwordError && !usernameError && !confirmPasswordError) {
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
        <form className='flex flex-col gap-y-3.5' onSubmit={registerUser}>
            <Input 
                label="Username"
                name="username"
                placeholder="Enter your username"
                error={usernameError}
                onChange={handleChange}
                onBlur={() => validateText(register.username, setUsernameError, "Username field can't be empty", /^[^\d][\w]{5,}$/)}
                value={register.username}
            />

            <Input 
                label="Email"
                name="email"
                placeholder="Enter your email"
                error={emailError}
                onChange={handleChange}
                onBlur={() => validateEmail(register.email, setEmailError)}
                value={register.email}
            />

            <Input 
                label="Password"
                name="password"
                type="password"
                placeholder="••••••••••••"
                error={passwordError}
                onChange={handleChange}
                onBlur={() => validatePassword(register.password, setPasswordError)}
                value={register.password}
            />

            <Input 
                label="Confirm password"
                name="confirmPassword"
                type="password"
                placeholder="••••••••••••"
                error={confirmPasswordError}
                onChange={handleChange}
                onBlur={() => validatePassword(register.confirmPassword, setConfirmPasswordError, "confirm", register.password)}
                value={register.confirmPassword}
            />
            
            <Button 
                type="submit" 
                width="full"
                isLoading={isLoading}
            >
                Sign up
            </Button>
        </form>
    )
}

export default Register
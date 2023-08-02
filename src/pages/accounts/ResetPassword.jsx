import React, { useState } from 'react'
import { Input } from '../../components'
import Button from '../../components/ui/Button';
import useForm from '../../hooks/useForm';
import { validatePassword, isValid } from '../../lib/validation';


function ResetPassword() {
    const {formInputs: resetPassword, setFormInputs: setResetPassword, handleChange} = useForm({
        password: "",
        confirmPassword: ""
    })
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function resetUserPassword(e) {
        e.preventDefault();
        
        if(isValid(resetPassword) && !passwordError && !confirmPasswordError) {
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
        <form className='flex flex-col gap-y-3.5' onSubmit={resetUserPassword}>
            <Input 
                label="Password"
                type="password"
                name="password"
                placeholder="••••••••••••"
                error={passwordError}
                onChange={handleChange}
                onBlur={({ target }) => validatePassword(target.value, setPasswordError)}
                value={resetPassword.password}
            />

            <Input 
                label="Confirm password"
                type="password"
                name="confirmPassword"
                placeholder="••••••••••••"
                error={confirmPasswordError}
                onChange={handleChange}
                onBlur={({ target }) => validatePassword(target.value, setConfirmPasswordError, "confirm", resetPassword.password)}
                value={resetPassword.confirmPassword}
            />
            
            <Button 
                type="submit" 
                width="full"
                isLoading={isLoading}
            >
                Reset password
            </Button>
        </form>
    )
}

export default ResetPassword
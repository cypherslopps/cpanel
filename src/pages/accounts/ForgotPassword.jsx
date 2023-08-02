import React, { useState } from 'react'
import { Input } from '../../components'
import Button from '../../components/ui/Button';
import { validateEmail } from '../../lib/validation';


function ForgotPassword() {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function sendResetLink(e) {
        e.preventDefault();
        
        if(email && !emailError) {
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
        <form className='flex flex-col gap-y-3.5' onSubmit={sendResetLink}>
            <Input 
                label="Email"
                placeholder="Enter your email"
                error={emailError}
                onChange={({ target }) => setEmail(target.value)}
                onBlur={({ target }) => validateEmail(target.value, setEmailError)}
                value={email}
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

export default ForgotPassword
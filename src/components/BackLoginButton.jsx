import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';
import Button from './ui/Button';

const BackLoginButton = () => {
    const navigate = useNavigate();

    return (
        <Button
            variant="border"
            size="sm"
            className="gap-x-3 text-gray-700/80 hover:text-gray-700 font-normal text-sm sm:text-sm"
            onClick={() => navigate("/accounts/login")}
        >
            <MoveLeft className='w-4 h-4 stroke-gray-700/80' />
            Back to login
        </Button>
    )
}

export default BackLoginButton
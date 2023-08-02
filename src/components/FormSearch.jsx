import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Search } from 'lucide-react';
import Input from './ui/Input';
import Button from './ui/Button';
import { searchServices } from '../redux/services/services.actions';

const FormSearch = ({ type="service" }) => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const [error, setError] = useState("");

    function searchQuery(e) {
        e.preventDefault();
        console.log(query);

        if(!query)
            setError("Search query can't be empty");
        else {
            setError("");
            
            try {
                if(type === "service")
                    dispatch(searchServices(query));
            } catch(e) {
                return e
            }
        }
    }

    return (
        <form 
            className='grid grid-cols-[1fr,max-content] items-start gap-x-1 sm:gap-x-2' 
            onSubmit={searchQuery}
        >
            {/* Search orders */}
            <Input 
                icon={Search} 
                placeholder="Search service"
                name="query"
                onChange={({ target }) => setQuery(target.value)}
                value={query}
                error={error}
            />

            <Button className='h-[38px]'>Search</Button>
        </form>
    )
}

export default FormSearch
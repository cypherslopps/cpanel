import { useState } from "react";

function useForm(inputs) {
    const [formInputs, setFormInputs] = useState(inputs);

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setFormInputs({
            ...formInputs,
            [name]: value
        });
    }

    return { formInputs, setFormInputs, handleChange };
}

export default useForm;
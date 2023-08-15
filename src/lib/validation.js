export const validateEmail = (value, setError) => {
    if(!(/^[^\d&*(!@)#(*$^][\w]+@[\w]{3,8}\.[a-zA-Z]{2,5}(\.[a-zA-Z]{2,4})?$/ig).exec(value))
        setError("Email is invalid");
    else
        setError("");
}

export const validatePassword = (value, setError, ...rest) => {
    const [type, passwordValue] = rest;

    if(!value)
        setError("Password can't be empty")
    else if(!(/^[A-Z][\w!@#$%^&*)(+=.<>}{\][:;'"|~`_-]{6,}$/g).exec(value))
        setError("Password strength is weak");
    else if(type === "confirm" && value !== passwordValue)
        setError("Password doesn't match");
    else 
        setError("");
};


export const validateText = (value, setError, error, regex) => {
    const validation = regex ? !(regex.exec(value)) : !value;

    if(validation)
        setError(error);
    else    
        setError("");
}

export const validateOrderQuantity = (value, setError, min, max, setCharge) => {
    if(!value)
        setError("Add a service quantity you would like to purchase");
    else if(isNaN(Number(value)))
        setError("Quantity requires a number");
    else if(value < min || value > max)
        setError(`Quantity should be in range of ${min} - ${max}`);
    else {
        setError("");

        // Set charge
        setCharge(value * 2);
    }
}

export const validateAPIKey = (value, setError) => {
    if(!value) 
        setError("API key can't be empty")
    else if(!(/^[\w]{15,}$/ig.exec(value)))
        setError("Set a valid and secured API Key")
    else
        setError("");        
}

export const validateMassOrder = (value, setError) => {
    if(!value)
        setError("Add mass order(s)")
    else if(value.split("|").length !== 3) {
        setError("Read the guide below to add mass orders");
    } else {
        const [serviceId, link, quantity] = value.split("|");
        console.log(value, serviceId, link, quantity, !(!(/(https:\/\/t.me\/[\w]+|(@[a-z]+))/ig).exec(link) && parseInt(serviceId) && parseInt(quantity)));
        if(!(!(/(https:\/\/t.me\/[\w]+|(@[a-z]+))/ig).exec(link) && isNaN(Number((serviceId))) && isNaN(Number((quantity)))))
            setError("Add a valid value");
        else 
            setError("")
    }
}

export const isValid = (data) => Object.values(data).every(value => Boolean(value));


import { useState, useEffect } from "react"

export default function useForm(
    initialValues,
    submitHandler, 
    ) {
    const [fromValues, setValues] = useState(initialValues);

    // useEffect(() => {
    //     setValues(initialValues);
    // }, [initialValues])

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (onchange){
        submitHandler(fromValues);
        }
    };

    return {
        fromValues,
        onChange,
        onSubmit,
    }
}

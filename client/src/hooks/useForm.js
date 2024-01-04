import { useState, useEffect } from "react"

export default function useForm(
    submitHandler, 
    initialValues,
    ) {
    const [values, setValues] = useState(initialValues);

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

        submitHandler(values);
        // if (onchange){
        // }
    };

    return {
        values,
        onChange,
        onSubmit,
    }
}

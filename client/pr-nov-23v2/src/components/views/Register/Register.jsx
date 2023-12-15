import { useState } from "react";
import { Link } from "react-router-dom";
// import FocusInput from "../../../utils/focusInputField";
import useFocus from "../../../utils/focusInputField";

const formInitialState = {
    'email': '',
    'password': '',
    'confirmPassword': '',
    'age': '',
}


export default function Register() {
    const [fromValues, setFormValues] = useState(formInitialState)
    // const focusImputField = useRef();
    const focusInputRef = useFocus();
   

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state, [e.target.name]: e.target.value
        }))
    };

    // useEffect(() => {
    //     focusImputField.current.focus();
    // }, []);


    const resetFromHandler = () => {
        setFormValues(formInitialState)
    };

    const submitHandler = (e) => {
e.target.value
    };

    return (
        <section id="register-page" className="content auth">
            <form id="register">
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input 
                    ref = {focusInputRef}
                    type="email" 
                    id="email" 
                    name="email" 
                    // defaultValue="maria@email.com"
                    value={fromValues.email}
                    onChange={changeHandler}
                    onBlur={() => console.log('onBlur')}
                    />


                    <label htmlFor="pass">Password:</label>
                    <input 
                    type="password" 
                    name="password"
                     id="register-password" 
                     value={fromValues.password}
                    onChange={changeHandler}
                     />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input 
                    type="password" 
                    name="confirm-password" 
                    id="confirm-password" 
                    value={fromValues.confirmPassword}
                    onChange={changeHandler}/>

                    <input className="btn submit" type="button" value="Register" onClick={submitHandler} />
                    <input className="btn submit" type="button" value="Reset" onClick={resetFromHandler} />
                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}

import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import { Link } from "react-router-dom";
import FocusImput from "../../hooks/focusInputForm";

const LoginFormKyes = {
    Email: 'email',
    Password: 'password',
};

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKyes.Email]: '',
        [LoginFormKyes.Password]: '',
    });

    const imputField = FocusImput();

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name={LoginFormKyes.Email}
                        placeholder="Sokka@gmail.com"
                        onChange={onChange}
                        value={values[LoginFormKyes.Email]}
                        ref={imputField}
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name={LoginFormKyes.Password}
                        onChange={onChange}
                        value={values[LoginFormKyes.Password]}
                    />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}

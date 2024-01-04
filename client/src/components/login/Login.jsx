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
           <div className="dark:bg-slate-900 dark:text-white min-h-screen bg-gray-100 flex-col justify-center py-1 px-6 lg:px-8"> 
          <div className="sm:mx-auto sm:w-full sm:max-w-md mt-10 ">
            <img
              className="mx-auto h-12 w-auto"
              src="svg/home-1-svgrepo-com.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 shadow-inner dark:text-white">
            Login
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 max-w dark:text-green-300">
              Not registered?      
              <Link to='/register'
                className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-orange-200 dark:hover:text-indigo-100"
              >
                Register
              </Link>
            </p>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-slate-100 dark:bg-slate-600 dark:text-green-100 py-8 px-6 shadow rounded-lg sm:px-10">
              <form className=" mb-0 space-y-6" action="#" onSubmit={onSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-green-100"
                  >
                    Email:
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name={LoginFormKyes.Email}
                      type="email"
                      autoComplete="email"
                      required=""
                      className="text-amber-900 font-bold"
                      onChange={onChange}
                        value={values[LoginFormKyes.Email]}
                        ref={imputField}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 dark:text-green-100"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      type="password"
                      autoComplete="current-password"
                      required=""
                      className="text-zinc-500"
                      name={LoginFormKyes.Password}
                        onChange={onChange}
                        value={values[LoginFormKyes.Password]}
                  />
                  </div>
                </div>
      
        
        
                <div className="flex items-center">
                  <input
                    id="terms-and-privacy"
                    name="terms-and-privacy"
                    type="checkbox"
                    className=""
                  />
                  <label
                    htmlFor="terms-and-privacy"
                    className="ml-2 block text-sm text-gray-900 dark:text-green-100"
                  >
                    I agree to the
                    <a href="#" className="text-indigo-600 hover:text-indigo-500 dark:text-green-300">
                      Terms
                    </a>
                    and
                    <a href="#" className="text-indigo-600 hover:text-indigo-500 dark:text-green-300">
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-white"
                  >
                    login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        
        )
    }
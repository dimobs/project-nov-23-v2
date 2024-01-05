import  {Link } from 'react-router-dom'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
// import './styleComponent.css'
import { useContext, useEffect, useState } from 'react';
import withAuth from "../../HOC/withAuth";
import AuthContext from '../../contexts/authContext';
function Navi (
   { _id,
    accessToken,
    email,}
) {
const {isAuthenticated } = useContext(AuthContext)

const [darkMode, setDarkMode] = useState(undefined);
const [toggleMenu, setToggleMenu] = useState(true)

useEffect(() => {
    if (darkMode) {
       localStorage.setItem("darkMode", "true");
       window.document.documentElement.classList.add("dark");

    }else if (darkMode === false) {
        localStorage.setItem("darkMode", "false");
        window.document.documentElement.classList.remove("dark")

    // }else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //     localStorage.setItem("darkMode", "true");
    //        window.document.documentElement.classList.add("dark");
    //        setDarkMode(true)
    }else {
        setDarkMode(localStorage.getItem("darkMode") === "true");
    }
}, [darkMode]);


return (
  <>
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 dark:bg-teal-900" >
        <div 
        className="inline mr-3"
        title="Switch Theme"
        onClick={() => setDarkMode(!darkMode)}
          > 
          {!darkMode 
             ? <svg xmlns="http:www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" data-slot="icon" className="w-5 h-5">
             <path fillRule="evenodd" d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z" clipRule="evenodd" />
           </svg>
             : <svg xmlns="http:www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" data-slot="icon" className="w-5 h-5">
             <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" />
           </svg>
         }
          </div>
  <div className="flex items-center flex-shrink-0 text-white mr-8">
    <Link to='/'><span  title="Home"  className="font-semibold text-xl tracking-tight">
      Sweet Home </span></Link>
  </div>
  <div className="block lg:hidden">
    <button 
    className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" 
    onClick={() => setToggleMenu(!toggleMenu)}
    >
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className={` ${
      toggleMenu ? "hidden" : ""
    } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
  
  >
    <div className="text-sm lg:flex-grow">

      <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Home
      </Link>
    
    {!isAuthenticated && (
      <>
      <Link to="/login" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Login
      </Link>
    
      <Link to="/register" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Register
      </Link>
  </>
        )}

        {isAuthenticated && (
      <Link to="/admin/createRoom" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        CreateRoom
      </Link>
      )}

      <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        About
      </Link>
      </div>

{isAuthenticated &&
    <div id="user">
      <Link to="/logout" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Logout {email}</Link>
    </div>
}
  </div>
</nav>
</>
)
}
const Header = withAuth(Navi)
export default Header;
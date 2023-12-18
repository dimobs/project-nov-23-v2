import  {Link } from 'react-router-dom'
// import './styleComponent.css'
import { useEffect, useState } from 'react';

const Header = () => {

const [darkMode, setDarkMode] = useState(undefined);
// const [btnName, setBtnName] = useState("Dark/Night");

const switchmode = () => {
    setDarkMode(!darkMode)
}

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
        console.log(localStorage.getItem("darkMode") === "true");
        console.log(setDarkMode);
    }
}, [darkMode]);


// const onchange = (e) => {
//     if (e.currentTarget.innerHTML == "Dark Mode") {
//        setBtnName(e.currentTarget.innerHTM = 'Light Mode')
//     }else {
//         setBtnName(e.currentTarget.innerHTM = 'Dark Mode')
//     }
// } 




    return (
        <header>
         <div className=""
         onClick={switchmode} > {!darkMode 
            ? <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Half moon" id="Half_moon"><path d="M61.4327,33.3949a.9988.9988,0,0,0-1.16.1909,19.497,19.497,0,0,1-13.9512,5.8491H46.298A19.5995,19.5995,0,0,1,35.005,3.8163a1,1,0,0,0-.4824-1.813,1.2507,1.2507,0,0,0-.4141-.0142A28.1254,28.1254,0,0,0,9.8869,44.414c.2384-.1948.4773-.3893.7314-.5655A12.0255,12.0255,0,0,1,28.173,48.1444a11.3285,11.3285,0,0,1,1.2441,3.6963l.0068.0454a10.159,10.159,0,0,1,5.22,6.4114A28.3264,28.3264,0,0,0,61.9728,34.4393.999.999,0,0,0,61.4327,33.3949Z"/><path d="M27.5626,53.2616c-.02-.3423-.06-.7061-.12-1.103a9.4521,9.4521,0,0,0-1.044-3.0913,9.9837,9.9837,0,0,0-8.8906-5.3892h-.0117a9.9555,9.9555,0,0,0-5.7383,1.814,10.1052,10.1052,0,0,0-4.19,6.6953c-.06.3877-.0986.749-.1172,1.0967a8.209,8.209,0,0,0-5.4346,7.7412,1,1,0,0,0,1,.999h.001l29-.0327a1,1,0,0,0,.999-1.0015,8.2116,8.2116,0,0,0-5.4531-7.7285Z"/></g></svg>
            : 
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <radialGradient id="w~INujfpQanMh___D7Au2a_8EUmYhfLPTCF_gr1" cx="24" cy="24" r="22" gradientUnits="userSpaceOnUse"><stop offset=".724" stop-color="#ffed54"></stop><stop offset=".779" stop-color="#ffe649"></stop><stop offset=".877" stop-color="#ffd22d"></stop><stop offset="1" stop-color="#ffb300"></stop></radialGradient><path fill="url(#w~INujfpQanMh___D7Au2a_8EUmYhfLPTCF_gr1)" d="M24,2l1.421,1.474c0.93,0.965,2.388,1.196,3.571,0.566l1.807-0.963l0.896,1.841	c0.586,1.205,1.902,1.876,3.222,1.641l2.016-0.357l0.283,2.028c0.185,1.328,1.229,2.371,2.557,2.557l2.028,0.283l-0.357,2.016	c-0.234,1.32,0.436,2.635,1.641,3.222l1.841,0.896l-0.963,1.807c-0.631,1.183-0.4,2.641,0.566,3.571L46,24l-1.474,1.421	c-0.965,0.93-1.196,2.388-0.566,3.571l0.963,1.807l-1.841,0.896c-1.205,0.586-1.876,1.902-1.641,3.222l0.357,2.016l-2.028,0.283	c-1.328,0.185-2.371,1.229-2.557,2.557l-0.283,2.028l-2.016-0.357c-1.32-0.234-2.635,0.436-3.222,1.641l-0.896,1.841l-1.807-0.963	c-1.183-0.631-2.641-0.4-3.571,0.566L24,46l-1.421-1.474c-0.93-0.965-2.388-1.196-3.571-0.566l-1.807,0.963l-0.896-1.841	c-0.586-1.205-1.902-1.876-3.222-1.641l-2.016,0.357l-0.283-2.028c-0.185-1.328-1.229-2.371-2.557-2.557l-2.028-0.283l0.357-2.016	c0.234-1.32-0.436-2.635-1.641-3.222l-1.841-0.896l0.963-1.807c0.631-1.183,0.4-2.641-0.566-3.571L2,24l1.474-1.421	c0.965-0.93,1.196-2.388,0.566-3.571l-0.963-1.807l1.841-0.896c1.205-0.586,1.876-1.902,1.641-3.222l-0.357-2.016l2.028-0.283	c1.328-0.185,2.371-1.229,2.557-2.557l0.283-2.028l2.016,0.357c1.32,0.234,2.635-0.436,3.222-1.641l0.896-1.841l1.807,0.963	c1.183,0.631,2.641,0.4,3.571-0.566L24,2z"></path><linearGradient id="w~INujfpQanMh___D7Au2b_8EUmYhfLPTCF_gr2" x1="8.092" x2="35.996" y1="8.092" y2="35.996" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fed100"></stop><stop offset="1" stop-color="#e36001"></stop></linearGradient><path fill="url(#w~INujfpQanMh___D7Au2b_8EUmYhfLPTCF_gr2)" d="M24,7C14.611,7,7,14.611,7,24s7.611,17,17,17s17-7.611,17-17S33.389,7,24,7z"></path>
            </svg>
          
        
        }
         </div>
        <h1><Link to="/">Furniture Store</Link></h1>
        <nav>
            <Link id="catalogLink" to="/" className="${active}">Dashboard</Link>
            <div id="user">
                <Link id="${createLink}" to="/create">Create Item</Link>
                <Link id="${profileLink}" to="/my-furniture" >My Publications</Link>
                <Link id="${logoutBtn}" to="javascript:void(0)">Logout</Link>
            </div>
            <div id="guest">
                <Link id="${loginLink}" to="/login">Login</Link>
                <Link id="${registerLink}" to="/register">Register</Link>
            </div>
        </nav>
    </header>
    );
};

export default Header;
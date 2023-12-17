import  {Link } from 'react-router-dom'
// import './styleComponent.css'


const Header = () => {
    return (
        <header>
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
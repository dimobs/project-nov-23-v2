import './styleComponent.css'

const Header = () => {
    return (
        <header>
        <h1><a href="/">Furniture Store</a></h1>
        <nav>
            <a id="catalogLink" href="/" className="${active}">Dashboard</a>
            <div id="user">
                <a id="${createLink}" href="/create" >Create Item</a>
                <a id="${profileLink}" href="/my-furniture" >My Publications</a>
                <a id="${logoutBtn}" href="javascript:void(0)">Logout</a>
            </div>
            <div id="guest">
                <a id="${loginLink}" href="/login">Login</a>
                <a id="${registerLink}" href="/registration">Register</a>
            </div>
        </nav>
    </header>
    );
};

export default Header;
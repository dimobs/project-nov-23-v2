import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import '../src/input.css'
import Path from './paths';
import Header from './components/Header-Footer/Header'
import Home from "./components/home/Home"
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';
import GameEdit from './components/game-edit/GameEdit';
import ErrorBoundary from './components/ErrorBoundary';
import AuthGuard from './components/guards/AuthGuard';
// import GameDetails from './components/game-details/GameDetails';
const GameDetails = lazy(() => import('./components/game-details/GameDetails'));
import { useState, useEffect } from 'react';

function App() {
const [theme, setTheme] = useState(null);

useEffect(() =>{
    if (window.matchMedia('(prefers-color-scheme: dark)').matches){
setTheme('dark');
    }else {
        setTheme('light');
    }
}, []);

useEffect(() => {
if (theme === "dark"){
    document.documentElement.classList.add("dark");
}else {
    document.documentElement.classList.remove("dark");
}
}, [theme]);

const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? 'light' : 'dark')
}

    return (
        <ErrorBoundary>
            <AuthProvider>
               <div id="box" className='h-screen bg-white dark:bg-slate-900 dark:text-white flex justify-center items-center' >
                <button className='bg-green-200 p-4 rounded-3xl' onClick={handleThemeSwitch}>
                    Dark Mode
                    </button>
                    <Header />
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Routes>
                            <Route path={Path.Home} element={<Home />} />
                            <Route path="/games" element={<GameList />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/games/:gameId" element={<GameDetails />} />

                            <Route element={<AuthGuard />}>
                                <Route path="/games/create" element={<GameCreate />} />
                                <Route path={Path.GameEdit} element={<GameEdit />} />
                                <Route path={Path.Logout} element={<Logout />} />
                            </Route>
                        </Routes>
                    </Suspense>
                </div>
            </AuthProvider>
        </ErrorBoundary>
    )
}

export default App

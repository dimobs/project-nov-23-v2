import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import '../src/input.css'
import Path from './paths';
import Header from './components/Header-Footer/Header'
// import GameList from './components/game-list/GameList';
// import GameCreate from './components/game-create/GameCreate';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';
import ErrorBoundary from './components/ErrorBoundary';
import AuthGuard from './components/guards/AuthGuard';
import AboutUs from './components/AboutUs/AboutUs';
import CreateRoom from './components/Administrator/createRoom';
import AllRooms from './home/All-rooms';
import RoomEdit from './components/Administrator/room-edit/roomEdit';
import RoomDetails from './components/RoomDetails';
import Footer from './components/Header-Footer/Footer';
import YourComponent from './components/Administrator/helper';
// const GameDetails = lazy(() => import('./components/game-details/GameDetails'));

function App() {
// const [theme, setTheme] = useState(null);

// useEffect(() =>{
//     if (window.matchMedia('(prefers-color-scheme: dark)').matches){
// setTheme('dark');
//     }else {
//         setTheme('light');
//     }
// }, []);

// useEffect(() => {
// if (theme === "dark"){
//     document.documentElement.classList.add("dark");
// }else {
//     document.documentElement.classList.remove("dark");
// }
// }, [theme]);

// const handleThemeSwitch = () => {
//     setTheme(theme === "dark" ? 'light' : 'dark')
// }

    return (
        <ErrorBoundary>
            <AuthProvider>
            {/* <div id="box" className='h-screen bg-white dark:bg-slate-900 dark:text-white flex justify-center items-center' > */}
            <div id="box" className='dark:text-green-100 white dark:bg-slate-500 ' >
                    <Header/>
                </div>
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <div className=" dark:text-white dark:bg-slate-700 ">

                        <Routes>
                            {/* <Route path={Path.Home} element={<Home />} /> */}
                            <Route path='/' element={<AllRooms />} />
                            {/* <Route path='/' element={<YourComponent />} /> */}
                            {/* <Route path="/games" element={<GameList />} /> */}
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            {/* <Route path="/games/:gameId" element={<GameDetails />} /> */}
                            <Route path='/about' element={<AboutUs />} />
                                <Route path="/rooms/:roomId" element={<RoomDetails />} />

                            <Route element={<AuthGuard />}>
                                {/* <Route path="/games/create" element={<GameCreate />} /> */}
                                <Route path="/admin/createRoom" element={<CreateRoom />} />
                                <Route path='/admin/edit-room/:roomId' element={<RoomEdit />} />
                                {/* <Route path={Path.GameEdit} element={<GameEdit />} /> */}
                                <Route path={Path.Logout} element={<Logout />} />
                            </Route>
                        </Routes>
                        </div>
                    </Suspense>
                    <div id="box" className='dark:text-green-100 white dark:bg-slate-500' >
                    <Footer />
                </div>
            </AuthProvider>
        </ErrorBoundary>
    )
}

export default App;

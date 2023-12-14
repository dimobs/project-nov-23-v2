import { Routes, Route } from 'react-router-dom';
import UserList from './components/Administrator/UserList';
// import Todo from './components/Administrator/Todo';
import Footer from './components/Header-Footer/Footer';
import Header from './components/Header-Footer/Header';
import './styles.css';
import Register from './components/views/Register/Register';
import NotFound from './components/views/NotFound/NotFound';
// import Register from './components/views/Register/Register';

function App() {

    return (
        <div>
            <Header />

            <main className="main">
                {/* <Todo /> */}
                {/* <Register /> */}
                {/* <UserList /> */}
               
                <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/register" element={<Register />} />
                <Route path='/:id' element={<NotFound />} />
                {/* <Route path="/games" element={<GameList />} /> */}
                {/* <Route path="/games/create" element={<GameCreate />} /> */}
                {/* <Route path="/login" element={<Login />} /> */}
                {/* <Route path="/games/:gameId" element={<GameDetails /> } /> */}
            </Routes>




            </main>
            <Footer />
        </div>
    );
}

export default App

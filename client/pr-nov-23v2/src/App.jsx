import UserList from './components/Administrator/UserList';
import Footer from './components/Header-Footer/Footer';
import Header from './components/Header-Footer/Header';
import './styles.css';

function App() {

    return (
        <div>
            <Header />

            <main className="main">
            <UserList />
            </main>
            <Footer />
        </div>
    );
}

export default App

import UserList from './components/Administrator/UserList';
import Todo from './components/Administrator/Todo';
import Footer from './components/Header-Footer/Footer';
import Header from './components/Header-Footer/Header';
// import Registration from './components/Registration';
import './styles.css';

function App() {

    return (
        <div>
            <Header />

            <main className="main">
                {/* <Todo /> */}
            <UserList />
          {/* <Registration /> */}
            </main>
            <Footer />
        </div>
    );
}

export default App

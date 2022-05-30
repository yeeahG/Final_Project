import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Banner from './pages/Banner';
import Menu from './pages/Menu'
import Login from './pages/Login'
import Home from './pages/Home'
import './App.css';
import Signup from './pages/Signup';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
       {/* <Home />
        <Banner /> */}

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

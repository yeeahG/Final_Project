import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Banner from './pages/Banner';
import Menu from './pages/Menu'
import Login from './pages/Login'
import Home from './pages/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
       {/* <Home />
        <Banner /> */}

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

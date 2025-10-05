import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Navbar from './layouts/Navbar';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function App() {
    return (
        <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/login" element={<Login/>} />
           
        </Routes>

        <ToastContainer position='top-right' autoClose={3000}></ToastContainer>
        </div>
        
    );
}

import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Login from '../pages/login';
import Navbar from '../layouts/Navbar';

export default function App() {
    return (
        <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/login" element={<Login/>} />
           
        </Routes>
        </div>
        
    );
}

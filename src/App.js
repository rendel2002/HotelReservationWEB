import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/book/:roomid/:fromdate/:todate" element={<Bookings />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
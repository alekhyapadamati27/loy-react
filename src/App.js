import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Booking from './components/Booking';
import AvailableLorries from './components/AvailableLorries';
import AddLorry from './components/AddLorry';
import './App.css'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/available-lorries" element={<AvailableLorries />} />
        <Route path="/add-lorry" element={<AddLorry />} />
        <Route Path="/" element={<div></div>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
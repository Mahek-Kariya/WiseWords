import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import './App.css';
import Home from './Components/Home.jsx';
import Random from './Components/Random.jsx';
import Search from './Components/Search.jsx';


function App() {
    return (
        <>
            <Navbar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/random" element={<Random />} />
            <Route path="/search" element={<Search />} />
            </Routes>
        </>
    );
}

export default App;

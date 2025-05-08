import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Eat from './pages/Eat.tsx';
import Travel from './pages/Travel.tsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eat" element={<Eat />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
    </>
  );
};

export default App;

import React, { useState } from 'react';
import './App.css';
import Front from './pages/front';
import Overview from './pages/overview';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Front/>}/>
            <Route path="/users/:PUUID" element={<Overview/>}/>
        </Routes>
    </>
  );

}

export default App

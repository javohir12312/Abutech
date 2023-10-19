import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Page1 from './pages/Page1';

const App = () => {
  return (
    <Routes>
      <Route index path='/' element={<Home/>}/> 
      <Route index path='/Page1' element={<Page1/>}/> 
    </Routes>
  );
}

export default App;

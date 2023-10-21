import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route index path='/' element={<Home/>}/> 
      {/* <Route index path='/' element={</>}/>  */}
    </Routes>
  );
}

export default App;

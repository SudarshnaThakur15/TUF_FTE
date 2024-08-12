import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dasboard from './Components/dasboard.jsx'; // Make sure this path is correct
import Navbar from './Components/navbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/dashboard' element={<Dasboard />} />
        <Route path='/nav' element={<Navbar/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);


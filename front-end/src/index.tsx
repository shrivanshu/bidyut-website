import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home_page';
import About from './Pages/About_page';
import Gallery from './Pages/Gallery_page';
import Contactpage from './Pages/Contact_page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Contactpage" element={<Contactpage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);  

reportWebVitals();

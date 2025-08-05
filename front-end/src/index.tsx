import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home_page';
import About from './Pages/About_page';
import Gallery from './Pages/Gallery_page';
import Contactpage from './Pages/Contact_page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contactpage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);  

reportWebVitals();

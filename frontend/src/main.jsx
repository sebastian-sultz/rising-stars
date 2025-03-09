import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import 'animate.css/animate.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     
        <App />
     
    </BrowserRouter>
  </React.StrictMode>
);
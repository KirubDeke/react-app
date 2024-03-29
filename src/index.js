import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './Footer.js';
import MusicPlayer from './MusicPlayer.js';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />
    <MusicPlayer />
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();

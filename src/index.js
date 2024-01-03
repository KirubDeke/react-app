import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store.js';
import './index.css';
import App from './App';
import Footer from './Footer.js';
import MusicPlayer from './MusicPlayer.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />

    <Provider store={store}>
    <MusicPlayer />
     </Provider>
    
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();

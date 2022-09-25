import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Users from './components/users';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();



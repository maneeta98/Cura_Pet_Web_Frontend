import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './utils/index.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// Inside your root component
<ToastContainer />


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

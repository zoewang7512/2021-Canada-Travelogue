import React from 'react';
import ReactDOM from 'react-dom/client';
import { DarkModeProvider } from "./context/ThemeContext";
import { SDataProvider } from "./context/ShowDataContext";
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import "./i18n.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider> <SDataProvider><App /></SDataProvider> </DarkModeProvider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

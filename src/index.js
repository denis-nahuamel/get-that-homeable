import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/auth-context';
import { SaveProvider } from './context/save-context';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <LoadScript
      googleMapsApiKey="AIzaSyAOnJfG7WLaEiGitMAAINtWpMUT04tHE5o"
    >
      <AuthProvider>
        <SaveProvider>
          <App />
        </SaveProvider>
      </AuthProvider>
      </LoadScript>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WeatherContextProvider } from './context/WeatherContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <WeatherContextProvider>
    <App />
    </WeatherContextProvider>
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProdiver} from "./context"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ThemeProdiver>
    <App />
    </ThemeProdiver>
  </React.StrictMode>
);



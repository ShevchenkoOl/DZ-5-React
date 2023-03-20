import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './components/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/DZ-5-React">
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

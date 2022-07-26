import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';
import { BrowserRouter } from 'react-router-dom';
import { App } from './views/App';
import reportWebVitals from './reportWebVitals';
import 'primereact/resources/themes/mdc-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { AppProviders } from './providers/AppProviders';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <AppProviders>
      <App />
    </AppProviders>
  </BrowserRouter>,
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './fontawesome';
import { ColorState } from './context/context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ColorState>
      <App />
    </ColorState>
  </React.StrictMode>
);

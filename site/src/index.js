import React from 'react';
import ReactDOM from 'react-dom/client';

import './common/common.scss';

import Rotas from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>
);
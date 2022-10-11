import React from 'react';
import ReactDOM from 'react-dom/client';
import { redirect } from 'react-router-dom';

import './common/common.scss';

import Routes from './routes';

/*let photo = document.getElementById('camera');
let file = document.getElementById('imagem-arq');

photo.addEventListener('click', () => {
  file.click();
});

file.addEventListener('change', (event) => {

  if (file.files.length <= 0) {
    return;
  }

  let reader = new FileReader();

  reader.onload = () => {
    photo.src = reader.result;
  }

  reader.readAsDataURL(file.files[0]);

});*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
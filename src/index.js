import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import 'flowbite';

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
);

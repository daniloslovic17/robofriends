  import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardList from './CardList'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots'; // {} is used because export in this file isn't default, if there was for example another variable cats it would be {robots, cats}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardList robots={ robots } />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

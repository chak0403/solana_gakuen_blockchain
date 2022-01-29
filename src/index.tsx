import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home';
import reportWebVitals from './reportWebVitals';
import {ParallaxProvider} from "react-scroll-parallax";

ReactDOM.render(
  <React.StrictMode>
      <ParallaxProvider>
            <Home />
      </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

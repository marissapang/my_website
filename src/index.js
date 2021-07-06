import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from 'react-router-dom';

// Google analytics
import ReactGA from 'react-ga';
const TRACKING_ID = 'UA-201399781-1'; // UA GOOGLE ID
ReactGA.initialize(TRACKING_ID);

ReactDOM.render(
	<Router>
    	<App/>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

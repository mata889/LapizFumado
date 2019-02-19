import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';



ReactDOM.render(<App />, document.getElementById('root'));



serviceWorker.register();

 if (window.location.protocol !== "https:") {
     window.location =
       "https://" + window.location.hostname + window.location.pathname + window.location.hash;
   }
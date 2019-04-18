import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/demo.css';
import './assets/css/material-dashboard-rtl.css';
import './assets/css/material-dashboard.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();

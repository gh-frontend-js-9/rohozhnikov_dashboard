import React from 'react';
import ReactDOM from 'react-dom';
import AppProjectPage from './App';
import * as serviceWorker from '../../serviceWorker';
ReactDOM.render(<AppProjectPage />, document.getElementById('root'));
serviceWorker.unregister();
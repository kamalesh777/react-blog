import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Axios from 'axios';

Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
Axios.interceptors.request.use(response=> {
    return response
}), (error) => {
    console.error(error);
    return Promise.reject(error);
}

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();

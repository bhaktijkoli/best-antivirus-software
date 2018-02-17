window.$ = window.jQuery = require('jquery');
require('./scripts/bootstrap.min');
// require('./scripts/common.js');
// require('./scripts/respond.min.js');
require('./scripts/bootstrap-select.js');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// import styles from './scss/app.scss';

ReactDOM.render(<App/>, document.getElementById('root'));

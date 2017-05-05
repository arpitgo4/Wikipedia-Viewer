
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.component';
import './index.html';

import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import './style.scss';

ReactDOM.render(
	<App />,
	document.getElementById('react-app')
);
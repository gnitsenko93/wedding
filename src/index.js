import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Conf from './json/wedding.json';

ReactDOM.render(<App config="Conf" />, document.getElementById('root'));


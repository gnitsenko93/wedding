import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Conf from './json/wedding.json';

const conf = Conf;

ReactDOM.render(<App config="conf" />, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import conf from './json/wedding.json';

ReactDOM.render(<App conf={conf} />, document.getElementById('root'));


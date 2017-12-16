import React, { Component } from 'react';
import './App.css';
import { Place } from './components/place';

class App extends Component {

	render() {
    		return (
      			<div className="App">
				Привет, это свадьбы Маши и Гриши.
      				{this.props.description}
			</div>
    		);
  	}
}

export default App;

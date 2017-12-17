import React, { Component } from 'react';
import './App.css';
import Place from './components/place';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            summary: props.conf.summary,
            description: props.conf.description,
            places: props.conf.places,
            dates: props.conf.dates,
            time: props.conf.time
        };
    }

	render() {
    		return (
                <div className="App">
                    {
                        this.state.places.map(place => <Place key={place.id} name={place.name} purpose={place.purpose} />)
                    }
                </div>
    		);
  	}
}

export default App;

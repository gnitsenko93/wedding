import React, { Component } from 'react';
import './App.css';
import conf from './json/wedding.json';
import Place from './components/Place';
import Overview from './components/Overview';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = Object.assign({}, conf);
    }

	render() {
    		return (
                <div className="App">
                    <div>
                        <span>{this.state.summary}</span>
                    </div>
                    <div>
                        <Overview description={this.state.description}
                                  dates={this.state.dates}
                                  time={this.state.time}/>
                    </div>
                    <div>
                        {
                            this.state.places.map(place => <Place key={place.id}
                                                                  name={place.name}
                                                                  purpose={place.purpose}
                                                                  time={place.time}
                                                                  address={place.address}
                            />)
                        }
                    </div>
                </div>
    		);
  	}
}

export default App;

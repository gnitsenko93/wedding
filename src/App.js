import React, { Component } from 'react';
import './styles/App.css';
import conf from './json/wedding.json';

import Place from './components/Place';
import Overview from './components/Overview';
import Summary from './components/Summary';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = conf
    }

	render() {
    		return (
                <div className="app">
                    <div className="app__section">
                        <Summary summary={this.state.summary}/>
                    </div>
                    <div className="app__section">
                        <Overview description={this.state.description}
                                  dates={this.state.dates}
                                  time={this.state.time}/>
                    </div>
                    <div className="app__section">
                        {
                            this.state.places.map(place => <Place key={place.id}
                                                                  name={place.name}
                                                                  purpose={place.purpose}
                                                                  time={place.time}
                                                                  address={place.address}/>)
                        }
                    </div>
                </div>
    		);
  	}
}

export default App;

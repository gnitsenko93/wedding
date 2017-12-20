import React, { Component } from 'react';
import './styles/App.css';
import conf from './json/wedding.json';

import Place from './components/Place';
import Overview from './components/Overview';
import Summary from './components/Summary';
import Dinner from './components/Dinner';
import Event from './components/Event';
import Party from './components/Party';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = conf;

        this.handlePlaceClick = this.handlePlaceClick.bind(this);
    }

    handlePlaceClick(place) {
        this.setState(
            () => {
                switch(place) {
                    case 'c0f9a369-51c2-43e6-9073-da3cb06d6757':
                        return { choosenPlace: <Event />};
                        break;
                    case '4c20c932-4627-4e55-9bc4-d101e15644b0':
                        return { choosenPlace: <Dinner/>};
                        break;
                    case '7d88f0ec-a837-4e3d-b2a9-9f9d46f8fd50':
                        return { choosenPlace: <Party/>};
                        break;
                    default:
                        return { choosenPlace: null };
                }
            }
        );
    }

    render() {
    		return (
                <div className="app">
                    <div>
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
                                                                      id={place.id}
                                                                      name={place.name}
                                                                      purpose={place.purpose}
                                                                      time={place.time}
                                                                      address={place.address}
                                                                      clickHandler={this.handlePlaceClick}
                                                                />)
                            }
                        </div>
                    </div>
                    <div>
                        {this.state.choosenPlace}
                    </div>
                </div>
    		);
  	}
}

export default App;

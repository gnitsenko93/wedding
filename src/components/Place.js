import React, { Component } from 'react';
import '../styles/Place.css';

class Place extends Component {
	render() {
	    return <div className="place">
            <span>{this.props.name}</span>
            <span>{this.props.purpose}</span>
            <span>{this.props.time}</span>
            <span>{this.props.address}</span>
        </div>;
    }
}

export default Place;

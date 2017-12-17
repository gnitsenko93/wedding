import React, { Component } from 'react';

class Place extends Component {
	render() {
	    return <div>
            <span>{this.props.name}</span>
            <span>{this.props.purpose}</span>
            <span>{this.props.time}</span>
            <span>{this.props.address}</span>
        </div>;
    }
}

export default Place;

import React, { Component } from 'react';
import '../styles/Place.css';

class Place extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.clickHandler(this.props.id);
    }

    render() {
	    return <div className="place" onClick={this.handleClick}>
            <span className="place__purpose">{this.props.purpose}</span>
            {
                this.props.address?
                    <a className="place__name place__address" href={this.props.address} target="_blank">{this.props.name}</a>
                    :
                    <span className="place__name">{this.props.name}</span>
            }
            <span className="timestamp">{this.props.time}</span>
        </div>;
    }
}

export default Place;

import React, { Component } from 'react';
import '../styles/Overview.css';

class Overview extends Component {
    render() {
        return <div className="overview">
            <span>{this.props.description}</span>
            <span>{this.props.dates}</span>
            <span>{this.props.time}</span>
        </div>;
    }
}

export default Overview;
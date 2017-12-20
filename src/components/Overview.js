import React, { Component } from 'react';
import '../styles/Overview.css';

class Overview extends Component {
    render() {
        return <div className="overview">
            <span>{this.props.description}</span>
            <span className="timestamp">{this.props.dates}</span>
        </div>;
    }
}

export default Overview;
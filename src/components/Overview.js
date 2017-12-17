import React, { Component } from 'react';

class Overview extends Component {
    render() {
        return <div>
            <span>{this.props.description}</span>
            <span>{this.props.dates}</span>
            <span>{this.props.time}</span>
        </div>;
    }
}

export default Overview;
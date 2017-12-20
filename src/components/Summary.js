import React, { Component } from 'react';
import '../styles/Summary.css';

class Summary extends Component {
    render() {
        return <div className="summary">
            <span>{this.props.summary}</span>
        </div>;
    }
}

export default Summary;
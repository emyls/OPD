import React, { Component } from 'react';
import '../../scss/opd/Breadcrumb.css';

class Breadcrumb extends Component {
    render() {
        return (
            <div className="opd-breadcrumb-wrapper">
                <b>{this.props.path}</b>
            </div>
        );
    }
}

export default Breadcrumb;

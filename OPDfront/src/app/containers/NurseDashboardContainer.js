import React, { Component } from 'react';
import Header from '../components/Header';
import InfoBar from '../components/InfoBar';
import Breadcrumb from '../components/Breadcrumb';
import NurseDashboard from '../components/NurseDashboard/NurseDashboard';
import Footer from '../components/Footer';

class NurseDashBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="pe-container">
                <Header/>
                <InfoBar/>
                <Breadcrumb path={"Home"}/>
                <NurseDashboard/>
                <Footer/>
            </div>
        );
    }
}

export default NurseDashBoard;

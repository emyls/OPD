import React, { Component } from 'react';
import Header from '../components/Header';
import InfoBar from '../components/InfoBar';
import Breadcrumb from '../components/Breadcrumb';
import DoctorsDashboard from '../components/DoctorsDashboard/DoctorsDashboard';
import Footer from '../components/Footer';


class DoctorsDashboardContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {
        return (
            <div className="pe-container">
                <Header/>
                <InfoBar/>
                <Breadcrumb path={"Home"}/>
                <DoctorsDashboard/>
                <Footer/>
            </div>
        );
    }
}

export default DoctorsDashboardContainer;

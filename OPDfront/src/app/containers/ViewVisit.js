import React, { Component } from 'react';
import Header from '../components/Header';
import InfoBar from '../components/InfoBar';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import PatientInfo from '../components/ViewVisit/PatientInfo';
import VisitTabBar from '../components/ViewVisit/VisitTabBar';
import MenuBar from '../components/ViewVisit/MenuBar';
import '../../scss/opd/ViewVisit.css';

class ViewVisit extends Component {
    render() {
        const pid = this.props.match.params.id;
        return (
            <div className="pe-container">

                {/*<div className="progress">*/}
                    {/*<div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{"width": "50%", "aria-valuenow":"50", "aria-valuemin":"0", "aria-valuemax":"100"}}></div>*/}
                {/*</div>*/}

                <Header/>
                <InfoBar/>
                <Breadcrumb path={"Home > View Patient Visit"}/>
                <div className="row opd-view-visit">
                    <div className="col-md-10">
                        <PatientInfo pid={pid}/>
                    </div>
                    <div className="col-md-2">
                        <MenuBar pid={pid}/>
                    </div>
                </div>
                <VisitTabBar pid={pid}/>
                <Footer/>
            </div>
        );
    }
}

export default ViewVisit;

import React, {Component} from 'react';
import TabBar from './TabBar';
import '../../../scss/opd/NurseDashboard.css';

import PatientsTab from './PatientsTab';
import DoctorsTab from './DoctorsTab';


class ProjectMilestoneContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isViewAvailableDoctors : true
        };
        this.showHideTab = this.showHideTab.bind(this);
    }


    showHideTab = (isViewAvailableDoctors) => {

        if( isViewAvailableDoctors === true){
            this.setState({
                isViewAvailableDoctors : true
            });
        }
        else{
            this.setState({
                isViewAvailableDoctors : false
            });
        }
    };



    render() {

       return (
           <div>
               <div>
                   <TabBar showHideTab={this.showHideTab}/>
               </div>

                       { this.state.isViewAvailableDoctors &&

                           <div className="opd-nurse-dashboard-tab-container">
                               <h1>Available Doctors</h1>
                               <DoctorsTab />
                           </div>
                       }




                       {
                           !this.state.isViewAvailableDoctors &&

                               <div className="opd-nurse-dashboard-tab-container">
                                   <PatientsTab />
                               </div>
                       }
           </div>







        );
    }
}

export default ProjectMilestoneContent;


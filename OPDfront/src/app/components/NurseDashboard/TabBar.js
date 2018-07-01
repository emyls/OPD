import React, {Component} from 'react';
import '../../../scss/opd/NurseDashboard.css';


class TabBar extends Component {

    constructor( props) {

        super(props);

        this.state = {
            availableDoctorsTabClass:"opd-nurse-dashboard-tab-bar-active-tab",
            viewPatientsTabClass:"opd-nurse-dashboard-tab-bar-in-active-tab"
        };

        this.changeTab = this.changeTab.bind(this);
        this.changeTabStyle = this.changeTabStyle.bind(this);
    }

    changeTab = (state) => {
        this.props.showHideTab(state);
        this.changeTabStyle(state);

    }

    //change tab style
    changeTabStyle = (buttonState) =>{

        if(buttonState === true){
            this.setState({
                availableDoctorsTabClass : "opd-nurse-dashboard-tab-bar-active-tab",
                viewPatientsTabClass : "opd-nurse-dashboard-tab-bar-in-active-tab"
            });
        }
        else{
            this.setState({
                viewPatientsTabClass :"opd-nurse-dashboard-tab-bar-active-tab",
                availableDoctorsTabClass : "opd-nurse-dashboard-tab-bar-in-active-tab"
            });
        }
    }

    render(){
        return(
            <div>
                <div className="row opd-nurse-dashboard-tab-bar">
                    <button onClick={()=>this.changeTab(true)} className={this.state.availableDoctorsTabClass}>Available Doctors</button>
                    <button onClick={()=>this.changeTab(false)} className={this.state.viewPatientsTabClass}>Patients</button>
                </div>
            </div>
        );
    }
}

export default TabBar;
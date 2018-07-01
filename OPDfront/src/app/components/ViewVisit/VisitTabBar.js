import React, {Component} from 'react';
import '../../../scss/opd/NurseDashboard.css';
import Summary from '../Summaries/Summary';

class VisitTabBar extends Component {

    constructor( props) {

        super(props);

        this.state = {
           type:'visits'
        };

        this.changeTab = this.changeTab.bind(this);
    }

    changeTab = (status) => {
        this.setState({type:status})

    }

    render(){
        const active = "opd-nurse-dashboard-tab-bar-active-tab";
        const inActive = "opd-nurse-dashboard-tab-bar-in-active-tab";


        return(
            <div>
                <div className="row opd-nurse-dashboard-tab-bar">
                    <button onClick={()=>this.changeTab('visits')} className={this.state.type === 'visits' ? active : inActive}>Visits</button>
                    <button onClick={()=>this.changeTab('prePre')} className={this.state.type === 'prePre' ? active : inActive}>Previous Prescriptions</button>
                    <button onClick={()=>this.changeTab('lab')} className={this.state.type === 'lab' ? active : inActive}>Lab Orders</button>
                    <button onClick={()=>this.changeTab('treat')} className={this.state.type === 'treat' ? active : inActive}>Treatments</button>
                    <button onClick={()=>this.changeTab('inject')} className={this.state.type === 'inject' ? active : inActive}>Injections</button>
                </div>

                <Summary pid={this.props.pid} type={this.state.type}/>

            </div>
        );
    }
}

export default VisitTabBar;
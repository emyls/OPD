import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';

import NurseDashboardContainer from './app/containers/NurseDashboardContainer';
import AddPAtient from './app/containers/AddPatient';
import ViewPatientNurse from './app/containers/ViewPatientNurse';

import DoctorsDashboardContainer from './app/containers/DoctorsDashboardContainer';
import ViewVisit from './app/containers/ViewVisit';

import Login from './app/containers/Login';

class App extends Component {
  render() {
    const userType = localStorage.getItem('type');
    const isLogged = localStorage.getItem('logged');
console.log(userType)
    return (
        <HashRouter>

            {
              isLogged === 'ok' ?

                  userType === 'Doctor' ?
                    <div>
                        <Route exact path="/" component={DoctorsDashboardContainer}/>
                        <Route path="/doctorDashboard" component={DoctorsDashboardContainer}/>
                        <Route path="/viewVisit/:id" component={ViewVisit}/>
                    </div>

                    :
                        <div>
                            <Route exact path="/" component={NurseDashboardContainer}/>
                            <Route path="/nurseDashboard" component={NurseDashboardContainer}/>
                            <Route path="/addPatient" component={AddPAtient}/>
                            <Route path="/viewPatient" component={ViewPatientNurse}/>
                        </div>

            :
                <div>
                    <Route exact path="/" component={Login}/>
                    <Route path="/login" component={Login}/>
                </div>
            }

      </HashRouter>
    );
  }
}

export default App;

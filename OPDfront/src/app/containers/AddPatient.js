import React, { Component } from 'react';

import PatientRegistrationForm from '../components/AddPatient/PatientRegistrationForm';

class AddPatient extends Component {
    render() {
        return(
            <div>
                <h2>Patient Registration Form</h2>

                <PatientRegistrationForm/>
            </div>
        );
    }
}

export default AddPatient;
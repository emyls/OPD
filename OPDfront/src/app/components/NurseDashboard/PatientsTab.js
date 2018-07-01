import React, { Component } from 'react';
import * as API from '../../Constants/APIcalls';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';


import Patients from './Patients';
import '../../../scss/opd/Patients.css';
import PatientRegistrationForm from "../AddPatient/PatientRegistrationForm";

class PatientsTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            isResponseFullFill:false,
            patients:[],
            patientDetails:""
        };

        this.addPatient = this.addPatient.bind(this);
        this.handlePatientArray = this.handlePatientArray.bind(this);
    }

    componentDidMount() {

        let self = this;

        axios.get(API.PATIENTS).then(function (response) {
            const patients = response.data;
console.log(patients)
            self.setState({patients:patients});
            self.setState({isResponseFullFill:true});
        }).catch();
    }

    componentWillMount() {
        let self = this;

        axios.get(API.PATIENTS).then(function (response) {
            const patients = response.data;
            console.log(patients)
            self.setState({patients:patients});
        }).catch();
    }


    handleClickOpen = () => {
        this.setState({ open: true});
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    addPatient() {
        let self = this;

        const body = {
            patientname:document.getElementById("name").value,
            gender:document.getElementById("gender").value,
            civilstatus:document.getElementById("civil").value,
            dob:document.getElementById("date").value,
            phone:document.getElementById("phoneNo").value,
            address:document.getElementById("address").value,
            bloodgroup:document.getElementById("bloodGroup").value,
            bmi:document.getElementById("bmi").value

        };
        console.log(body);
        axios.post(API.PATIENTS, body).then(function (response) {
            if(response.status === 201){
                window.alert('Successfully added');
                // console.log(response);
                self.handlePatientArray(response.data);
                self.handleClose();
            }
        }).catch();
    }

    handlePatientArray(patient) {
        let patients = this.state.patients;
        patients.push(patient);
        this.setState(patients);
    }


    render() {
        return ( this.state.isResponseFullFill &&
            <div>
                <div className="row opd-patients-button-row">
                    <div className='col'>
                        <h1>Patients</h1>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-primary" onClick={this.handleClickOpen}>Patient Registration Form</button>
                    </div>
                </div>
                <Patients patients={this.state.patients}/>

                <Dialog
                    open={this.state.open}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    disableBackdropClick={true}
                >
                    <DialogContent>
                        <h3>Patient Registration Form</h3>
                        <PatientRegistrationForm/>

                        <div className="modal-footer">

                        </div>

                    </DialogContent>
                    <DialogActions>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleClose}>Cancel</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.addPatient}>Save</button>
                    </DialogActions>
                </Dialog>


            </div>
        );
    }
}

export default PatientsTab;

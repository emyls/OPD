import React, { Component } from 'react';
import * as API from '../../Constants/APIcalls';
import axios from 'axios';
import Avatar from '../../../images/avatar-dale.jpg';

class PatientInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            patient:"",
            isResponseFullFill:false
        };
    }

    componentDidMount() {

        let self = this;

        axios.get(API.PATIENTS + "/" + this.props.pid).then(function (response) {
            const patient = response.data[0];
            // console.log(patient)
            self.setState({patient:patient,isResponseFullFill:true});
            // self.setState({isResponseFullFill:true});
        }).catch();
    }


    render() {
console.log(this.state.patient)
        return ( this.state.isResponseFullFill &&
            <div className="alert alert-dismissible alert-light">
                <h5>{this.state.patient.patientname}</h5>
                <div className="row">
                    <div >
                        <img src={Avatar} />
                    </div>
                    <div className="col-md">
                        <p>Patient ID : {this.state.patient.patientID}</p>
                        <p>Gender : {this.state.patient.gender}</p>
                        <p>Civil Status : {this.state.patient.civilstatus}</p>
                    </div>
                    <div className="col-md">
                        <p>Date of Birth : {this.state.patient.dob}</p>
                        <p>Age : {new Date().getFullYear() - new Date(this.state.patient.dob).getFullYear()} years</p>
                    </div>
                    <div className="col-md">
                        <p>Phone No : {this.state.patient.phone}</p>
                        <p>Address : {this.state.patient.address}</p>
                    </div>
                    <div className="col-md">
                        <p>Blood Group :{this.state.patient.bloodgroup}</p>
                        <p>BMI : {this.state.patient.bmi}</p>
                        <span><p>Resent Allergies : {this.state.patient.allergies.map((allergy, index) => {
                            return(
                                <span key={index}>{allergy.allergyName},</span>
                            )
                        })}</p></span>
                    </div>
                </div>
            </div>

        );
    }
}

export default PatientInfo;

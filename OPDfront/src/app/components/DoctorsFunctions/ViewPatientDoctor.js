import React, { Component } from 'react';

class ViewPatientDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="alert alert-dismissible alert-light">
                <h5>{this.props.patient.patientname}</h5>
                <div className="row">
                    <div className="col">
                        <p>Pstient ID : {this.props.patient.patientID}</p>
                        <p>Gender : {this.props.patient.gender}</p>
                        <p>Civil Status : {this.props.patient.civilstatus}</p>
                        <p>Date of Birth : {this.props.patient.dob}</p>
                        <p>Age : {new Date().getFullYear() - new Date(this.props.patient.dob).getFullYear()} years</p>
                    </div>
                    <div className="col">
                        <p>Phone No : {this.props.patient.phone}</p>
                        <p>Address : {this.props.patient.address}</p>
                        <p>Blood Group : {this.props.patient.bloodgroup}</p>
                        <p>BMI : {this.props.patient.bmi}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewPatientDoctor;

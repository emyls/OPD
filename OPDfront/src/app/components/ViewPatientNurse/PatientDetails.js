import React, {Component} from 'react';
import patientLogo from '../../../images/patient.png';

class PatientDetails extends Component {
    render() {
        return (
            <div className="row opd-doctor">
                <div className="col-md-4 opd-doctor-imgs">
                    <img src={patientLogo} alt="Card image"/>
                </div>
                <div className="col-md-8">
                    <h2>{this.props.patient.patientname}</h2>
                    <p>Gender : {this.props.patient.gender}</p>
                    <p>Civil Status : {this.props.patient.civilstatus}</p>
                    <p>Blood Group : {this.props.patient.bloodgroup}</p>
                    <p>BMI : {this.props.patient.bmi}</p>
                    <p>Date of Birth : {this.props.patient.dob}</p>
                    <p>Address : {this.props.patient.address}</p>
                    <p>Phone No : {this.props.patient.phone}</p>
                </div>
            </div>
        );
    }
}

export default PatientDetails;

import React, {Component} from 'react';
import logo from '../../../images/doctor.png';
import '../../../scss/opd/Doctor.css';

class Doctor extends Component {
    render() {
        return(
            <div className="row opd-doctor" style={{height:'16vh'}}>
                <div className="col-md-3" style={{padding:'0px'}}>
                    <img src={logo} />
                </div>
                <div className="col-md-9">
                    <h6>Dr.{this.props.doctor.username}</h6>
                    <p>{this.props.doctor.comments}</p>
                </div>
            </div>
        );
    }
}

export default Doctor;
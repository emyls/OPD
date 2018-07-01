import React, {Component} from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import ViewPatientNurse from '../../containers/ViewPatientNurse';
import FullScreenDialogModel from '../FullScreenDialogModel';

import '../../../scss/opd/Patients.css';

class Patients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            patient:""
        };

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClickOpen = (patient) => {
        this.setState({ open: true, patient:patient});
        console.log(this.state.patient)
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    render() {

        const dialogTitle = ('Patient Details');

        const dialogContent = (
            <div>
                <ViewPatientNurse patient={this.state.patient}/>
                <div className="modal-footer">
                </div>
            </div>);

        const dialogActions = (
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleClose}>Cancel</button>
        );

        const dialog = <FullScreenDialogModel  open={this.state.open}
                                               handleClose={this.handleClose}
                                               dialogContent={dialogContent}
                                               dialogTitle={dialogTitle}
                                               dialogActions={dialogActions}/>;

        return (
            <div className="opd-patients-table-container">
                <table className="table table-hover">
                    <thead>
                    <tr className="table-active">
                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone No</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.props.patients.map((patient, index) => {
                            return(
                                <tr onClick={() => this.handleClickOpen(patient)} key={index}>
                                    <th scope="row">{patient.patientname}</th>
                                    <td>{patient.gender}</td>
                                    <td>{patient.address}</td>
                                    <td>{patient.phone}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>

                </table>

                {this.state.open && dialog}

            </div>
        );
    }
}

export default Patients;

import React, { Component } from 'react';

import PatientDetails from '../components/ViewPatientNurse/PatientDetails';
import AllergyForm from '../components/ViewPatientNurse/AlergyForm';
import AllergyTable from '../components/ViewPatientNurse/AllergyTable';
import AssignToDoctor from '../components/ViewPatientNurse/AssignToDoctor';
import ConfirmDialogModel from '../components/ConfirmDialogModel';
import * as API from "../Constants/APIcalls";
import axios from "axios/index";

class ViewPatientNurse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            allergies: this.props.patient.allergies
        };

        this.handleOpenAssignDoctorDialog = this.handleOpenAssignDoctorDialog.bind(this);
        this.handleCloseAssignDoctorDialog = this.handleCloseAssignDoctorDialog.bind(this);
        this.setAllergies = this.setAllergies.bind(this);
        this.addAllergies = this.addAllergies.bind(this);
        this. changeQue = this. changeQue.bind(this);
        this. allergiesSetFromChild = this.allergiesSetFromChild.bind(this);
    }

    handleOpenAssignDoctorDialog = () => {
        this.setState({open: true});
    };

    handleCloseAssignDoctorDialog = () => {
        this.setState({open: false});
    };

    setAllergies(allergy) {
        let allergies = this.state.allergies;
        allergies.push(allergy);
        this.setState(allergies);
        this.addAllergies();
    }

    allergiesSetFromChild (allergy) {
        let list = this.state.allergies;
        list.push(allergy);
        this.setState(list);
    }


    addAllergies() {
        let self = this;
        let pid = this.props.patient.patientID;

        let body = {
            allergies:this.state.allergies
        }

        console.log( this.state.allergies);
        axios.put(API.PATIENTS + '/' + pid + '/allergies', body).then(function (response) {
            if(response.status === 201){
                console.log('MMMMMMMMMM',response)
                self.allergiesSetFromChild(response.data);
                window.alert('Successfully added');

            }
        }).catch();
    }

    changeQue() {

    }

    render() {

        const CDMtitle = ('Assign Patient To A Doctor');

        const CDMcontent = (<AssignToDoctor patientID={this.props.patient.patientID} changeQue={this. changeQue} handleClose={this.handleCloseAssignDoctorDialog}/>);

        const CDMactions = (
            <div>
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleCloseAssignDoctorDialog}>Cancel</button>
            </div>);

        const confirmDialog = <ConfirmDialogModel open={this.state.open}
                                                  handleClose={this.handleCloseAssignDoctorDialog}
                                                  CDMcontent={CDMcontent}
                                                  CDMtitle={CDMtitle}
                                                  CDMactions={CDMactions}/>;


        return (
            <div>
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleOpenAssignDoctorDialog}>Assign To A Doctor</button>
                <div className="row">
                    <div className="col">
                        <PatientDetails patient={this.props.patient}/>
                        <AllergyForm setAllergies={this.setAllergies} handleAllergy={this.allergiesSetFromChild}/>
                    </div>

                    <div className="col">
                        <AllergyTable patient={this.props.patient}/>
                    </div>

                </div>

                {this.state.open && confirmDialog}
            </div>
        );
    }
}

export default ViewPatientNurse;

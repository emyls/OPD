import React, { Component } from 'react';
import FullScreenDialogModel from '../FullScreenDialogModel';
import Injections from '../PatientForms/Injection';
import '../../../scss/opd/VisitForm.css';
import * as API from "../../Constants/APIcalls";
import axios from "axios/index";

class Treatement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            pid: this.props.pid
        }

        this.addInjection = this.addInjection.bind(this);
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    addInjection() {
        let self = this;
        let body;
        const pid = this.state.pid;

        let b = {
            injection: document.getElementById('iinje').value,
            injectionDate : document.getElementById('idate').value,
            injectionStatus: document.getElementById('istat').value,
        };



console.log(b);
            axios.put(API.TREATEMENTS + '/visits/' + localStorage.getItem('visitid') + '/injections', b).then(function (response) {
                window.alert('Injection Added !');
                self.handleClose();
            }).catch();




    }

    render() {

        const dialogTitle = ('Injections');
        const dialogContent = (<Injections/>);
        let dialogActions = (
            <div>
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleClose}>Cancel</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.addInjection}>Save</button>
            </div>);

        const fullScreenDialog = <FullScreenDialogModel open={this.state.open}
                                                        handleClose={this.handleClose}
                                                        dialogContent={dialogContent}
                                                        dialogTitle={dialogTitle}
                                                        dialogActions={dialogActions}/>;

        return(
            <div style={{padding:'30px'}} className="list-group-item list-group-item-action">

                <div className="row">
                    <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal" onClick={this.handleOpen}>
                        <i className="fas fa-plus"/>
                        Add Injection
                    </button>
                </div>

                <div className="form-group">
                    <label className="col-form-label" >Symptoms* : </label>
                    <input id="tsymptoms" type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Treatment* : </label>
                    <input id="ttreatment" type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Illness* : </label>
                    <input id="tillness" type="text" className="form-control" />
                </div>

                <small><b>Fields marked with an asterisk must be filled*</b></small>

                {fullScreenDialog}

            </div>
        );
    }
}

export default Treatement;
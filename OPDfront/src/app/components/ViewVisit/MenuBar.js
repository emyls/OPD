import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FullScreenDialogModel from '../FullScreenDialogModel';
import Drugs from '../PatientForms/Drugs';
import Examinations from '../PatientForms/Examination';
import Injections from '../PatientForms/Injection';
import LabRequest from '../PatientForms/LabRequest';
import Treatments from '../PatientForms/Treatement';
import * as API from "../../Constants/APIcalls";
import axios from "axios/index";

const drugs = 'drugs';
const exam = 'exam';
const injec = 'injec';
const labs = 'labs';
const treat = 'treat';

let dialogTitle, dialogContent;


class MenuBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            isResponseFullFill:false,
            visit:"",
            type:""
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleClose1 = this.handleClose1.bind(this);
        this.checkout = this.checkout.bind(this);
    }

    componentDidMount() {

        let self = this;

        const did = localStorage.getItem('id');
        // const did = 'D3333';

        axios.get(API.VISIT_GET_BY_PID + "/" + this.props.pid).then(function (response) {
            const visits = response.data;
            const recentVisit = visits[visits.length-1]

            console.log('ll',recentVisit);
            self.setState({visit:recentVisit});
             self.setState({isResponseFullFill:true});
        }).catch();
    }

    handleOpen = () => {
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({open: false});
    }

    handleClose1(){
        this.setState({open: false});
    }

    handleDialog(type) {

        switch(type) {
            case drugs:
                dialogTitle = ('Select Drugs');
                dialogContent = (<Drugs pid={this.props.pid}/>);
                this.handleOpen();
                this.setState({type:type});
                break;

            case exam:
                dialogTitle = ('Examinations');
                dialogContent = (<Examinations/>);
                this.handleOpen();
                this.setState({type:type});
                break;

            case injec:
                dialogTitle = ('Injections');
                dialogContent = (<Injections/>);
                this.setState({type:type});
                this.handleOpen();
                break;

            case labs:
                dialogTitle = ('Lab Request');
                dialogContent = (<LabRequest/>);
                this.setState({type:type});
                this.handleOpen();
                break;

            case treat:
                dialogTitle = ('Treatments');
                dialogContent = (<Treatments pid={this.props.pid} vid={this.state.visit.visitID}/>);
                this.handleOpen();
                this.setState({type:type});
                break;

        }
    }

    handleSave() {
        let self = this;
        const type = self.state.type;

        switch(type) {
            case drugs:
                this.addDrugs();
                break;

            case exam:
                break;

            case injec:
                break;

            case labs:
                this.addLabs();
                break;

            case treat:
                this.addTreatment();
                break;
        }
    }


    addTreatment() {
        const body = {
            patientID: this.props.pid,
            visitID: localStorage.getItem('visitid'),
            illness: document.getElementById('tillness').value,
            symptoms: document.getElementById('tsymptoms').value,
            treatment: document.getElementById('ttreatment').value
        };

        axios.post(API.TREATEMENTS, body).then(function (response) {
            // this.handleClose;
            window.alert('Treatment added !')
        }).catch();

    }


    addLabs() {
        let self = this;
        const body = {
            patientID: self.props.pid,
            visitID: localStorage.getItem('visitid'),
            testname: document.getElementById('ltest').value,
            priority: document.getElementById('lprio').value,
            duedate: document.getElementById('ldue').value,
            comments: document.getElementById('lcomme').value,
        };

        axios.post(API.LABS, body).then(function (response) {
             self.handleClose();
            window.alert('Lab Report added !')
        }).catch();

    }


    addDrugs() {
        let self = this;
        const body = {
            patientID: self.props.pid,
            visitID: localStorage.getItem('visitid'),
            bnf: "none",
            drugname: document.getElementById('ddrug').value,
            dosage: document.getElementById('ddosage').value,
            frequency: document.getElementById('dfrequency').value,
            period: document.getElementById('dperiod').value,
        };

        axios.post(API.DRUGS, body).then(function (response) {
            // self.handleClose();
            window.alert('Drug added !')
        }).catch();

    }

    checkout() {

        let body = {
            latestDoctor: 'none'
        };

        // axios.get(API.PATIENTS + "/" + this.props.pid).then(function (response) {
        //
        //     body = response.data[0];
        //     body.latestDoctor = "none";
        //     console.log('nmk ' ,body);
        // }).catch();



        axios.put(API.PATIENTS + '/' + this.props.pid + '/doctors/' + "none").then(function (response) {

        }).catch();
    }



    render() {
        let dialogActions = (
            <div>
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleClose}>Cancel</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => {this.handleSave()}}>Save</button>
            </div>);

        const fullScreenDialog = <FullScreenDialogModel open={this.state.open}
                                                  handleClose={this.handleClose}
                                                  dialogContent={dialogContent}
                                                  dialogTitle={dialogTitle}
                                                  dialogActions={dialogActions}/>;

        return ( this.state.isResponseFullFill &&
            <div className="list-group">
                {/*<div className="list-group-item list-group-item-action">*/}
                    {/*<button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal" onClick={() => this.handleDialog(exam)}>*/}
                        {/*<i className="fas fa-plus"/>*/}
                        {/*Add Examination*/}
                    {/*</button>*/}
                {/*</div>*/}

                <div className="list-group-item list-group-item-action">
                    <Link to='/doctorDashboard'>
                    <button type="button" className="btn btn-info btn-sm" data-dismiss="modal" onClick={this.checkout}>
                        <i className="fas fa-sign-out-alt"/>
                        Checkout visit
                    </button>
                    </Link>
                </div>

                <div className="list-group-item list-group-item-action">
                    <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal" onClick={() => this.handleDialog(treat)}>
                        <i className="fas fa-plus"/>
                        Treatments
                    </button>
                </div>

                <div className="list-group-item list-group-item-action">
                    <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal" onClick={() => this.handleDialog(labs)}>
                        <i className="fas fa-plus"/>
                        Lab Reqest
                    </button>
                </div>
                <div className="list-group-item list-group-item-action">
                    <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal" onClick={() => this.handleDialog(drugs)}>
                        <i className="fas fa-plus"/>
                        Drugs
                    </button>
                </div>
                {fullScreenDialog}
            </div>
        );
    }
}

export default MenuBar;

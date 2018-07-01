import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Avatar from '../../../images/avatar-dale.jpg';
import * as API from '../../Constants/APIcalls';
import ViewPatientDoctor from '../DoctorsFunctions/ViewPatientDoctor';
import VisitForm from '../DoctorsFunctions/VisitForm';
import ConfirmDialogModel from '../ConfirmDialogModel';
import patientIcon from '../../../images/patient.png';
import '../../../scss/opd/MyQueue.css';
import ViewVisit from '../../containers/ViewVisit';
import AssignToDoctor from '../../components/ViewPatientNurse/AssignToDoctor';

class      MyQueue extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
            open: false,
            open1:false,
            queue:[],
            isResponseFullFill:false,
            ok: false
        }
        this.createVisit = this.createVisit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpenAssignDoctorDialog = this.handleOpenAssignDoctorDialog.bind(this);
        this.handleCloseAssignDoctorDialog = this.handleCloseAssignDoctorDialog.bind(this);
    }

    componentDidMount() {

        let self = this;

        const did = localStorage.getItem('id');
        // const did = 'D3333';

        axios.get(API.PATIENTS).then(function (response) {
            const patients = response.data;
            let queue = self.state.queue;

            console.log(patients);
            for( let i=0; i<patients.length; i++) {
                if(patients[i].latestDoctor === did) {
                    queue.push(patients[i]);
                }
            }
            console.log('ll',queue);
            self.setState({queue});
            self.setState({isResponseFullFill:true});
        }).catch();
    }

    handleOpen = () => {
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({open: false});
    }

    handleClose1() {
        this.setState({open: false});
    }

    handleOpenAssignDoctorDialog = () => {
        this.setState({open1: true});
    };

    handleCloseAssignDoctorDialog = () => {
        this.setState({open1: false});
    };

    toogleExpand(status) {
        this.setState({isExpanded: status});
    }

    createVisit(visit) {
        let self = this;
        const body = {
            patientID: this.props.patient.patientID,
            complaint:  document.getElementById('complaint'+this.props.index).value,
            remarks: document.getElementById('remarks'+this.props.index).value,
            date: document.getElementById('date'+this.props.index).value,
            time: document.getElementById('time'+this.props.index).value,
            doctorID: localStorage.getItem('id')
        };
        console.log('tyuiv',body);
        axios.post(API.VISITS, body).then(function (response) {
            // window.alert('Created a Visit')
             localStorage.setItem('visitid', response.data.visitID)
            console.log(response.data)
        }).catch(function (response) {
            console.log(response);
        });
    }

    render() {
        const CDMtitle1 = ('Assign Patient To A Doctor');

        const CDMcontent1 = (<AssignToDoctor index={this.props.index} patientID={this.props.patient.patientID} changeQue={this.props.queChange} handleClose={this.handleCloseAssignDoctorDialog}/>);

        const CDMactions1 = (
            <div>
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleCloseAssignDoctorDialog}>Cancel</button>
            </div>);

        const confirmDialog1 = <ConfirmDialogModel open={this.state.open1}
                                                  handleClose={this.handleCloseAssignDoctorDialog}
                                                  CDMcontent={CDMcontent1}
                                                  CDMtitle={CDMtitle1}
                                                  CDMactions={CDMactions1}/>;




        const viewVisitPath = "/viewVisit/" + this.props.patient.patientID;

        const CDMtitle = ('New Visit Form');

        const CDMcontent = (<VisitForm createVisit={this.createVisit} index={this.props.index}/>);

        const CDMactions = (
            <div>
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleClose}>Cancel</button>
            <Link to={viewVisitPath}>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.createVisit}>Create</button>
            </Link>
            </div>);

        const confirmDialog = <ConfirmDialogModel open={this.state.open}
                                                  handleClose={this.handleClose}
                                                  CDMcontent={CDMcontent}
                                                  CDMtitle={CDMtitle}
                                                  CDMactions={CDMactions}/>;

        return (
            <div>

                <div className="alert alert-dismissible alert-warning">


                    <div className="row opd-my-queue">
                        <div className="col-md-" style={{padding:'0px'}}>{this.props.index+1}
                            <span><img src={patientIcon} alt="Card image" /></span>
                        </div>
                        <div className="col-md-6">
                            <h4 className="alert-heading">{this.props.patient.patientname}</h4>
                            <h6>Age : {new Date().getFullYear() - new Date(this.props.patient.dob).getFullYear()} years</h6>
                            <p>{this.props.patient.gender}</p>

                        </div>

                        <div className="col-md">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleOpen}>
                                <i className="fas fa-plus"/>
                                Create a Visit
                            </button>
                        </div>

                        <div className="col-md">
                            <button type="button" className="btn btn-info" data-dismiss="modal" onClick={this.handleOpenAssignDoctorDialog}>
                                <i className="fas fa-plus"/>
                                Redirect patient
                            </button>
                        </div>
                    </div>

                    {
                        this.state.isExpanded ?

                        <div>
                            <ViewPatientDoctor patient={this.props.patient}/>
                            <div className="row opd-my-queue-toggle" onClick={() => this.toogleExpand(false)}>
                                <i className="fas fa-sort-up" />
                            </div>
                        </div>

                        :

                        <div className="row opd-my-queue-toggle" onClick={() => this.toogleExpand(true)}>
                           <i className="fas fa-caret-down" />
                        </div>
                    }
                </div>

                {confirmDialog}
                {confirmDialog1}

            </div>
        );
    }
}

export default MyQueue;

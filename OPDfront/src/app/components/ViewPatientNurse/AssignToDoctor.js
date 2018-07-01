import React, {Component} from 'react';
import * as API from '../../Constants/APIcalls';
import axios from 'axios';
import avatar from '../../../images/doctor.png';
import '../../../scss/opd/Doctor.css';

class AssignToDoctor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            doctors:[],
            isResponseFullFill:false
        };

        this.assignDoctor = this.assignDoctor.bind(this);
    }

    componentDidMount() {

        let self = this;

        axios.get(API.USERS).then(function (response) {
            const users = response.data;
            let doctors = [];
            let k=0;
            for(let i=0; i<users.length; i++) {
                if(users[i].usertype === 'Doctor') {
                    doctors[k]=users[i];
                    k++;
                }
            }
            self.setState({doctors:doctors});
            self.setState({isResponseFullFill:true});
        }).catch();
    }

    assignDoctor(did) {

        let patientId = this.props.patientID;
        let self = this;
            axios.put(API.PATIENTS + '/' + patientId + '/doctors/' + did, ).then(function (response) {



                if(response.status === 201) {
                    window.alert('Assigned !');
                    self.props.handleClose();
                    self.props.changeQue(self.props.index);
                }


            }
            ).catch();

    }

    render() {
        return ( this.state.isResponseFullFill &&
                <div className="username opd-doctor-hov">
                    {
                        this.state.doctors.map((doctor, index) => {

                            return(
                                <div key={index} onClick={() => {this.assignDoctor(doctor.userID)}}>
                                    <span>{index+1}</span>
                                    <span className="avatar">
                                    <img src={avatar} alt="avatar" style={{height:'8vh'}}/>
                                    </span>
                                    <span>{doctor.username}</span>
                                </div>
                            )
                        })
                    }


                </div>

        );
    }
}

export default AssignToDoctor;

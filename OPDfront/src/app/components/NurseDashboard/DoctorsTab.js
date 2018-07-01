import React, {Component} from 'react';
import Doctor from './Doctor';
import '../../../scss/opd/Doctor.css';
import * as API from '../../Constants/APIcalls';
import axios from 'axios';

class DoctorsTab extends Component {

    constructor(props) {
        super(props);

        this.state = {
          doctors:[],
            isResponseFullFill:false
        };
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

    render() {
        return( this.state.isResponseFullFill &&
            <div className="row opd-doctor-row">
                {
                    this.state.doctors.map((doctor, index) => {

                        return(
                            <div className="col-md-3 opd-doctor-container" key={index}>
                                <Doctor doctor={doctor} />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default DoctorsTab;
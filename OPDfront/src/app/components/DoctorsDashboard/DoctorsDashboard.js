import React, { Component } from 'react';

import MyQueue from '../DoctorsFunctions/MyQueue';
import MenuBar from "../ViewVisit/MenuBar";
import * as API from "../../Constants/APIcalls";
import axios from "axios/index";

class DoctorsDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            queue:[],
            isResponseFullFill:false,
            queChanged:false
        };

        this.handleChangedQueue = this.handleChangedQueue.bind(this);
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

    handleChangedQueue(index) {
        let list = this.state.queue;
        list.splice(index, 1);
        this.setState(list);
    }

    render() {

        return ( this.state.isResponseFullFill &&
            <div>
                <div>
                    {/*<button type="button" className="btn btn-secondary" data-dismiss="modal">My Queue</button>*/}
                    </div>
                <div>
                    <h2>My Queue</h2>

                    {
                        this.state.queue.map((patient, index) => {
                            return(
                                <MyQueue key={index} index={index} patient={patient} index={index} queChange={this.handleChangedQueue} />
                            )

                        })
                    }

                </div>
            </div>
        );
    }
}

export default DoctorsDashboard;

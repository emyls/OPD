import React, { Component } from 'react';
import * as API from "../../Constants/APIcalls";
import axios from "axios/index";
import '../../../scss/opd/Summary.css';

class  AllergyTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visits:[],
            isResponseFullFill:false
        };
    }

    componentDidMount() {

        let self = this;

        axios.get(API.TREATEMENTS + "/" + this.props.pid).then(function (response) {
            const visits = response.data;

            self.setState({visits:visits});
            self.setState({isResponseFullFill:true});
        }).catch();
    }



    render() {

        return ( this.state.isResponseFullFill &&
            <table className="table table-hover opd-summary">

                <thead>
                <tr className="table-active">
                    <th scope="col">Visit ID</th>
                    <th scope="col">Symptoms</th>
                    <th scope="col">Illness</th>
                    <th scope="col">Comments</th>
                </tr>
                </thead>


                <tbody>
                {
                    this.state.visits.map((visit, index) => {
                        return(
                            <tr key={index}>
                                <th scope="row">{visit.visitID}</th>
                                <td>{visit.symptoms}</td>
                                <td>{visit.illness}</td>
                                <td>{visit.comments}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default AllergyTable;

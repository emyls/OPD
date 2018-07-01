import React, { Component } from 'react';
import * as API from "../../Constants/APIcalls";
import axios from "axios/index";
import '../../../scss/opd/Summary.css';

class AllergyTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visits:[{injection: "test1",injectionDate: "16/6/2018", injectionStatus: "Active", visitID:"V1529135296287"
            }],
            isResponseFullFill:false
        };
    }

    componentDidMount() {

        let self = this;

        axios.get(API.TREATEMENTS + "/visits" + localStorage.getItem('visitid')).then(function (response) {
            const visits = response.data;
            let list = [];
            let k = 0;

            for( let i=0; i<visits.length; i++) {
                if(visits[i].injection !== 'none') {
                    list[k] = visits[i];
                    k++;
                }
            }
console.log(list);

            // self.setState({visits:list});
            self.setState({isResponseFullFill:true});
        }).catch();
    }



    render() {

        return ( this.state.isResponseFullFill &&
            <table className="table table-hover opd-summary">

                <thead>
                <tr className="table-active">
                    <th scope="col">Visit ID</th>
                    <th scope="col">Injection</th>
                    <th scope="col">Injection Date</th>
                    <th scope="col">Injection Status</th>
                    {/*<th scope="col">Symptoms</th>*/}
                </tr>
                </thead>


                <tbody>
                {
                    this.state.visits.map((visit, index) => {
                        return(
                            <tr key={index}>
                                <th scope="row">{visit.visitID}</th>
                                <td>{visit.injection}</td>
                                <td>{visit.injectionDate}</td>
                                <td>{visit.injectionStatus}</td>
                                {/*<td>{visit.symptoms}</td>*/}
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

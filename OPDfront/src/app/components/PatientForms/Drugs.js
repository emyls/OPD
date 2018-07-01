import React, { Component } from 'react';
import axios from 'axios';
import '../../../scss/opd/VisitForm.css';
import * as API from '../../Constants/APIcalls';

class Drugs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            drugs:[],
            patientDrugs:[],
            isResponseFullFill: false,
            add: false,
            toggleShow: false
        };

        this.addDrugs = this.addDrugs.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.addNewDrugfunc = this.addNewDrugfunc.bind(this);
    }

    componentDidMount() {
        let self = this;
        axios.get(API.DRUGLIST).then(function (response) {
            console.log(response.data);
            self.setState({drugs:response.data, isResponseFullFill: true});
        }).catch();

        // axios.get(API.DRUGS + "/" + this.props.pid).then(function (response) {
        //     console.log(response.data);
        //     self.setState({patientDrugs:response.data, isResponseFullFill: true});
        // }).catch();
    }

    addDrugs() {
        let list = this.state.patientDrugs;

        let drug = {
            drugname: document.getElementById('ddrug').value,
            dosage: document.getElementById('ddosage').value,
            frequency: document.getElementById('dfrequency').value,
            period: document.getElementById('dperiod').value,
        };

        list.push(drug);
        this.setState(list);
        this.setState({add: true});
    }

    handleToggle = (status) => {
        this.setState({toggleShow: status});
    }

    addNewDrugfunc() {
        let self = this;

        axios.post(API.DRUGLIST_POST + "?DrugName=" + document.getElementById('addDrug').value + "&Remarks=none").then(function (response) {
            window.alert('New Drug is Added');
            self.handleToggle(false);
        }).catch();
    }


    render() {

        const addNewDrug = (
            <div>
                <div className="form-group">
                    <label>Drug Name : </label>
                    <input id="addDrug" type="text" className="form-control"/>
                </div>

                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.addNewDrugfunc}>
                    submit
                </button>
            </div>);


        const tableBody = this.state.patientDrugs.map((drug, index) => {
                            return(

                                <tr key={index}>
                                <th scope="row">{drug.drugname}</th>
                                <td>{drug.dosage}</td>
                                <td>{drug.frequency}</td>
                                <td>{drug.period}</td>
                            </tr>
                        )
                    });


        return( this.state.isResponseFullFill &&
            <div style={{padding:'30px'}}>

                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => {this.handleToggle(true)}}>
                    <i className="fas fa-plus" />
                    Add another drug
                </button>

                {this.state.toggleShow && addNewDrug}

                <div className="list-group-item list-group-item-action">

                    <div className="form-group">
                        <label>Drug : </label>
                        <select multiple="" className="form-control" id="ddrug">
                            {
                                this.state.drugs.map((drug, index) => {
                                    return(
                                        <option key={index}>{drug.drugName}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Dosage : </label>
                        <input id="ltest" type="text" className="form-control" id="ddosage"/>
                    </div>

                    <div className="form-group">
                        <label>Frequency : </label>
                        <input id="ltest" type="text" className="form-control" id="dfrequency"/>
                    </div>

                    <div className="form-group">
                        <label>Period : </label>
                        <input id="ltest" type="text" className="form-control" id="dperiod"/>
                    </div>

                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.addDrugs}>
                        <i className="fas fa-plus"/>
                        Add
                    </button>
                </div>



                <div className="list-group-item list-group-item-action">
                    <h3>Drug Summary</h3>
                    <table className="table table-hover">
                        <thead>
                        <tr className="table-active">
                            <th scope="col">Name</th>
                            <th scope="col">Dosage</th>
                            <th scope="col">Frequency</th>
                            <th scope="col">Period</th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.state.add && tableBody}
                        </tbody>
                    </table>
                    {/*<button type="button" className="btn btn-secondary" data-dismiss="modal">*/}
                        {/*<i className="fas fa-plus"/>*/}
                        {/*Send To Pharmacy*/}
                    {/*</button>*/}
                </div>
            </div>
        );
    }
}

export default Drugs;

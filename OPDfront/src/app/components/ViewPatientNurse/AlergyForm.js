import React, { Component } from 'react';
import * as API from '../../Constants/APIcalls';
import axios from 'axios';

class AlergyForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showForm: false,
        }
    }

    handleShowForm(status) {
        this.setState({showForm: status});
    }

    handleAllergy() {
        let self = this;

        let allergy = {
            allergyName: document.getElementById('allergy').value,
            state: document.getElementById('status').value,
            remarks: document.getElementById('remark').value,
        };

        console.log(allergy);
         self.props.setAllergies(allergy);
        this.handleShowForm(false);
    }

    render() {
        return (
           <div>
               <button type="button" className="btn btn-primary " onClick= {() => {this.handleShowForm(true)}}>Add Allergy</button>

               {
                   this.state.showForm &&

                   <div className="form-group">

                           <div className="form-group">
                               <label className="col-form-label">Allergy</label>
                               <input type="text" className="form-control" id="allergy" />
                           </div>


                           <div className="form-group">
                               <label>Status</label>
                               <select multiple="" className="form-control" id="status">
                                   <option>Current</option>
                                   <option>Past</option>
                               </select>
                           </div>

                           <div className="form-group">
                               <label className="col-form-label">Remark</label>
                               <input type="text" className="form-control" id="remark" />
                           </div>


                           <span>
                               <button type="button" className="btn btn-secondary" onClick= {() => {this.handleShowForm(false)}}>Cancel</button>
                           </span>
                           <span>
                               <button type="button" className="btn btn-primary" onClick={()=> {this.handleAllergy()}}>Save</button>
                           </span>

                   </div>
               }
           </div>
        );
    }
}

export default AlergyForm;

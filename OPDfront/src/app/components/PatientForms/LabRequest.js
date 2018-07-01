import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import '../../../scss/opd/VisitForm.css';

class LabRequest extends Component {

    datePicker(){
        console.log(document.getElementById('date').value);
    };

    render() {
        return(
            <div style={{padding:'30px'}} className="list-group-item list-group-item-action">

                <div className="form-group">
                    <label className="col-form-label" >Test: </label>
                    <input id="ltest" type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Priority* : </label>
                    <select multiple="" className="form-control" id="lprio">
                        <option>High</option>
                        <option>Medium</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Due Date* : </label>
                    <form noValidate className="form-control">
                        <TextField
                            id="ldue"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.setFechaDesde}
                        />
                    </form>
                </div>



                <div className="form-group">
                    <label className="col-form-label" >Comments*: </label>
                    <input id="lcomme" type="text" className="form-control" />
                </div>

            </div>
        );
    }
}

export default LabRequest;
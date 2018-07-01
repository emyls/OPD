import React, { Component } from 'react';

import '../../../scss/opd/VisitForm.css';

class Injection extends Component {
    render() {
        const date = new Date();
        return(
            <div style={{padding:'30px'}} className="list-group-item list-group-item-action">
                <div className="form-group">
                    <label className="col-form-label" >Injection Date Time : </label>
                    <input id="idate" type="text" className="form-control" placeholder={date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear()} disabled={true} value={date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear()}/>
                </div>

                <div className="form-group">
                    <label>Injection* : </label>
                    <input id="iinje" type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Injection status : </label>
                    <select multiple="" className="form-control" id="istat">
                        <option>Active</option>
                        <option>Deactive</option>
                    </select>
                </div>

                <small><b>Fields marked with an asterisk must be filled *</b></small>
            </div>
        );
    }
}

export default Injection;
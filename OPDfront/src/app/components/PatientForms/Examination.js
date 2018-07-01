import React, { Component } from 'react';

import '../../../scss/opd/VisitForm.css';

class Examination extends Component {
    render() {
        return(
            <div style={{padding:'30px'}}>
                <div className="form-group">
                    <label className="col-form-label" >Exam Date Time : </label>
                    <input id="name" type="text" className="form-control" placeholder={new Date()} disabled={true} />
                </div>

                <div className="form-group">
                    <label className="col-form-label" >Height in <b>cm*</b>: </label>
                    <input id="name" type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label className="col-form-label" >Weight in <b>kg*</b>: </label>
                    <input id="name" type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label className="col-form-label" >BMI : </label>
                    <input id="name" type="text" className="form-control" disabled={true} />
                </div>

                <div className="form-group">
                    <label className="col-form-label" >Temperature in <b>F0*</b>: </label>
                    <input id="name" type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label className="col-form-label" >Systolic Blood Preasure* : </label>
                    <input id="name" type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label className="col-form-label" >Diastolic Blood Preasure* : </label>
                    <input id="name" type="text" className="form-control" />
                </div>
                <small><b>Fields marked with an asterisk must be filled</b></small>
            </div>
        );
    }
}

export default Examination;
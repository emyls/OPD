import React, { Component } from 'react';

import '../../../scss/opd/VisitForm.css';

class VisitForm extends Component {

    render() {
        const day = new Date();
        return(
            <div style={{padding:'30px'}}>
                <div className="form-group">
                    <label className="col-form-label" >Complaints / Injury : </label>
                    <input id={"complaint"+this.props.index} type="text" className="form-control" placeholder="Enter Name here"  />
                </div>

                <div className="form-group">
                    <label>Visit Type : </label>
                    <select multiple="" className="form-control" id={"type"+this.props.index}>
                        <option>OPD</option>
                        <option>Clinick</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="col-form-label" >Remarks : </label>
                    <input id={"remarks"+this.props.index} type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <fieldset disabled="">
                        <label className="control-label" >Date</label>
                        <input className="form-control" id={"date"+this.props.index} type="text" disabled={true} value={day.getDay()+"/"+day.getMonth()+"/"+day.getFullYear()} />
                    </fieldset>
                </div>

                <div className="form-group">
                    <fieldset disabled="">
                        <label className="control-label" >TIme</label>
                        <input className="form-control" id={"time"+this.props.index} type="text" disabled={true} value={day.getHours()+"."+day.getMinutes()} />
                    </fieldset>
                </div>

                <div className="form-group">
                    <fieldset disabled="">
                        <label className="control-label" >Doctor</label>
                        <input className="form-control"  type="text" disabled={true} value={"Dr."+localStorage.getItem('user')} />
                    </fieldset>
                </div>


            </div>
        );
    }
}

export default VisitForm;
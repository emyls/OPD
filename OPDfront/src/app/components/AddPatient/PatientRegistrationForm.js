import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class PatientRegistrationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    fileChangedHandler = (event) => {
        this.setState({image: event.target.image});
    }

    render() {

        return(
            <div style={{padding:'30px'}}>

                <div className="form-group">
                    <label className="col-form-label" >Name : </label>
                    <input id="name" type="text" className="form-control" placeholder="Enter Name here"  />
                </div>

                <div className="form-group">
                    <label>Gender : </label>
                    <select multiple="" className="form-control" id="gender">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Civil status: </label>
                    <select multiple="" className="form-control" id="civil">
                        <option>Single</option>
                        <option>Married</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Date of Birth* : </label>
                    <form noValidate className="form-control">
                        <TextField
                            id="date"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                </div>


                <div className="form-group">
                    <label className="col-form-label" >Address : </label>
                    <input id="address" type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label className="col-form-label">Phone No : </label>
                    <input id="phoneNo" type="text" className="form-control"  />
                </div>

                <div className="form-group">
                    <label className="col-form-label">Blood Group : </label>
                        <input id="bloodGroup" type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label className="col-form-label">BMI : </label>
                    <input id="bmi" type="text" className="form-control" />
                </div>

                {/*<div className="form-group row">*/}

                    {/*<div className="col">*/}
                        {/*<img style={{height: "130px", width: "80%", display: "block"}} src={this.state.image} alt="Card image" />*/}
                    {/*</div>*/}

                    {/*<div className="col">*/}
                        {/*<label>Add Patient picture here</label>*/}
                        {/*<input id="pic" type="file" className="form-control-file"  aria-describedby="fileHelp" onChange={this.fileChangedHandler}/>*/}
                        {/*<small id="fileHelp" className="form-text text-muted">picture must be in 200*200 px</small>*/}
                    {/*</div>*/}
                {/*</div>*/}


            </div>
        );
    }
}

export default PatientRegistrationForm;
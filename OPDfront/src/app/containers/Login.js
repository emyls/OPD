import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as API from '../Constants/APIcalls';

import axios from 'axios';

import '../../scss/opd/Login.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    login() {
        let login = this;

        const userID = document.getElementById('id').value;
        const password = document.getElementById('password').value;
        const body = {userID:userID,password:password};

        axios.post(API.LOGIN,body).then(function (response) {

            if(response.status === 200) {

                localStorage.setItem('logged','ok');
                localStorage.setItem('user', response.data[0].username);
                localStorage.setItem('type', response.data[0].usertype);
                localStorage.setItem('id', response.data[0].userID);
                response.data[0].type === 'Doctor' ? window.location.href = '/doctorDasboard' : window.location.href = '/nurseDashboard';
            }
        }).catch( function (err) {
            console.log(err);
        });
    }

    handleAllergies(allergy) {
        let allergies = this.state.allergies;
        allergies.push(allergy);
        this.setState(allergies);
    }

    render() {
        return(
           <div className='row' style={{'margin-top': '26vh'}}>
		    <div className='col-md-4'></div>
            <div className="list-group col-md-4 ">
                <h3 className="list-group-item list-group-item-action active">
                   Login
                </h3>

                    <div className="form-group list-group-item list-group-item-action">
                        <label >NIC :</label>
                        <input type="text" className="form-control" id="id" aria-describedby="emailHelp"/>
                    </div>
                   <div className="form-group list-group-item list-group-item-action">
                       <label>Password</label>
                       <input type="password" className="form-control" id="password" placeholder="Password" />
                   </div>


                <div className="list-group-item list-group-item-action disabled opd-button">
                    <Link to={"/SignUp"}>
                    <button type="button" className="btn btn-primary btn-lg opd-button">SignUp</button>
                    </Link>
                    <button type="button" className="btn btn-primary btn-lg" onClick={this.login}>Login</button>
                </div>
            </div>
			<div className='col-md-4'></div>
		   </div>
			
        );
    }
}

export default Login;
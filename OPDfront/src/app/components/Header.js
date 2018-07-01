import React, { Component } from 'react';
import avatar from '../../images/avatar-dale.jpg';
import '../../scss/opd/Header.css';

import logoD from '../../images/doctor.png';
import logoN from '../../images/nurse.png';
import logo from '../../images/logo.png';

class Header extends Component {

    signOut = () => {
        window.localStorage.clear();
        window.location.href = '/login';
    }

    render() {
let log;
        localStorage.getItem('type')==='Doctor' ? log = logoD : log = logoN;
        return (
            <div className="header">
                <div  className="header-icon">
                    <span><img src={logo} /></span>
                    <span>DragNDrops icon</span>
                </div>
                <div className="actions ">
                    <div className="username header-login" >
                        <span className="avatar">
                            <img src={log} alt="avatar" />
                        </span>
                        <span>{localStorage.getItem('user')}</span>
                        <span><button type="button" className="btn btn-primary btn-sm" onClick={this.signOut}>logout</button></span>
                    </div>
                </div>
            </div>

        );
    }
}

export default Header;

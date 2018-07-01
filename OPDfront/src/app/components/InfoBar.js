import React, {Component} from 'react';
import '../../scss/opd/InfoBar.css';

class InfoBar extends Component {
    constructor(props) {
        super(props);

        this.setCurrentDate = this.setCurrentDate.bind(this);
    }

    setCurrentDate() {
        var d = new Date();
        var day = d.getDate();
        var month = d.getMonth();
        var year = d.getFullYear();

        switch(month) {
            case 0: month = "January"; break;
            case 1: month = "February"; break;
            case 2: month = "March"; break;
            case 3: month = "April"; break;
            case 4: month = "May"; break;
            case 5: month = "June"; break;
            case 6: month = "July"; break;
            case 7: month = "August"; break;
            case 8: month = "September"; break;
            case 9: month = "October"; break;
            case 10: month = "November"; break;
            case 11: month = "December"; break;
        }

        return month + " " + day + ", " + year;
    }

    render() {
        let type;

        localStorage.getItem('type')==='Doctor' ? type = 'Doctor' : type = 'Nurse';
        return (
            <div className="navbar navbar-expand-lg navbar-dark bg-primary row">
                <div className="col-md-5">
                    <span className="navbar-brand">{type} ID :</span>
                    <span className="navbar-brand">{localStorage.getItem('id')}</span>
                </div>
                <div className="col-md-5">
                    <span className="navbar-brand">{this.setCurrentDate()}</span>
                </div>
            </div>
        );
    }
}

export default InfoBar;

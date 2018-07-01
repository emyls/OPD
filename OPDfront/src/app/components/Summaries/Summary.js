import React, { Component } from 'react';
import Visits from './Visits';
import PrePrescriptions from './Prescriptions';
import Labs from './Labs';
import Treats from './Treatments';
import Injections from './Injections';


class AllergyTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pid:this.props.pid,

        };
    }



    render() {

        return (
          <div>

              {
                   this.props.type === 'visits' &&
                   <Visits pid={this.props.pid} />

              }

              {
                   this.props.type === 'prePre' &&
                   <PrePrescriptions pid={this.props.pid}/>

              }

              {
                   this.props.type === 'lab' &&
                   <Labs pid={this.props.pid}/>

              }
              {
                   this.props.type === 'treat' &&
                   <Treats pid={this.props.pid}/>

              }
              {
                   this.props.type === 'inject' &&
                   <Injections pid={this.props.pid}/>

              }
          </div>
        );
    }
}

export default AllergyTable;

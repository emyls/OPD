import React, { Component } from 'react';


class AllergyTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allergies : [],
            done: false
        }
    }

    componentDidMount() {
        let list = this.props.patient.allergies;
        let allergies = this.state.allergies;

        let k=0;

        for (let i=0; i<list.length; i++) {
            if(list[i].allergyName !== "none") {
                allergies[k] = list[i];
            }

            this.setState(allergies);
            this.setState({done:true});
        }
    }

    render() {
        return ( this.state.done &&
            <table className="table table-hover">

                <thead>
                <tr className="table-active">
                    <th scope="col">#</th>
                    <th scope="col">Allergy</th>
                    <th scope="col">Status</th>
                    <th scope="col">Remark</th>
                </tr>
                </thead>


                <tbody>
                {
                    this.state.allergies.map((allergy, index) => {
                        return(
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{allergy.allergyName}</td>
                                <td>{allergy.state}</td>
                                <td>{allergy.remarks}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default AllergyTable;

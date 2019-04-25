import React, {Component, Fragment} from 'react';

class Input3 extends Component {
    state = {
        year: ""
    }

    calculateBirthYear = () => {
        let age = document.getElementById("input3").value;
        this.setState({year: 2019 - age})
    }

    render() {
        return (
            <Fragment>
                <input
                    id={"input3"}
                    placeholder={"birth yaer"}
                    onKeyUp={this.calculateBirthYear}
                />
                <p> {this.state.year} </p>
            </Fragment>
        )
    }
}

export default Input3;
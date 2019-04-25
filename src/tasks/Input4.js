import React, {Component, Fragment} from 'react';

class Input4 extends Component {
    state = {
        surname: "",
        firstname: "",
        middlename: ""
    }

    separateText = () => {
        let textValue = document.getElementById("input4").value;
        let arr = textValue.split(" ");
        this.setState({
            surname: arr[0],
            firstname: arr[1],
            middlename: arr[2]
        });
    }

    render() {
        return (
            <Fragment>
                <input id={"input4"}
                       onKeyUp={this.separateText}
                       placeholder={"ФИО"}/>
                <p> {this.state.surname} </p>
                <p> {this.state.firstname} </p>
                <p> {this.state.middlename} </p>
            </Fragment>
        )
    }
};

export default Input4;
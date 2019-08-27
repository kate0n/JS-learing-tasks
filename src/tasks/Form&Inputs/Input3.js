import React, {Component, Fragment} from 'react';

class Input3 extends Component {
    state = {
        year: ""
    }

    getText = React.createRef();

    calculateBirthYear = () => {
        let age = this.getText.current.value;
        this.setState({year: 2019 - age})
    }

    render() {
        return (
            <Fragment>
                <input
                    ref={this.getText}
                    placeholder={"birth yaer"}
                    onKeyUp={this.calculateBirthYear}
                />
                <p> {this.state.year} </p>
            </Fragment>
        )
    }
}

export default Input3;
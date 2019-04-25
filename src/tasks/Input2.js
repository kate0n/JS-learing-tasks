import React, {Component, Fragment} from 'react';

class Input2 extends Component {
    state = {
        text: ""
    }

    addUpperCaseText = () => {
        let textValue = document.getElementById('input2').value.toUpperCase();
        this.setState({ text: textValue } )
    }

    render() {
        return (
            <Fragment>
                <input
                    id={"input2"}
                    onKeyUp={this.addUpperCaseText}
                    placeholder={"to upper case"}/>
                <p> {this.state.text} </p>
            </Fragment>
        )
    }
}

export default Input2;
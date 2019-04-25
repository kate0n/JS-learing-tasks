import React, {Component, Fragment} from 'react';

class Inputs extends Component {
    state = {
        text: ""
    }

    addText = () => {
        let textValue = document.getElementById('input').value;
        this.setState({text: textValue})
    };

    render() {
        return (
            <Fragment>
                <input
                    id={"input"}
                    onKeyUp={this.addText}
                    placeholder={"dynamic appear of text"}/>
                <p> {this.state.text} </p>
            </Fragment>
        )
    }
};

export default Inputs;
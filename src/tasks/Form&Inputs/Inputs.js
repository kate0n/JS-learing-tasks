import React, {Component, Fragment} from 'react';

class Inputs extends Component {
    state = {
        text: ""
    }

    getText = React.createRef();

    addText = () => {
        let textValue = this.getText.current.value;
        this.setState({text: textValue})
    };

    render() {
        return (
            <Fragment>
                <input
                    ref={this.getText}
                    onKeyUp={this.addText}
                    placeholder={"dynamic appear of text"}/>
                <p> {this.state.text} </p>
            </Fragment>
        )
    }
};

export default Inputs;
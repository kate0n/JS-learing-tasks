import React, {Component, Fragment} from 'react';

class Input2 extends Component {
    state = {
        text: ""
    }

    getText = React.createRef();

    addUpperCaseText = () => {
        let textValue = this.getText.current.value.toUpperCase();
        this.setState({text: textValue})
    }

    render() {
        return (
            <Fragment>
                <input
                    ref={this.getText}
                    onKeyUp={this.addUpperCaseText}
                    placeholder={"to upper case"}/>
                <p> {this.state.text} </p>
            </Fragment>
        )
    }
}

export default Input2;
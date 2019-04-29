import React, {Component} from 'react';

class Checkbox1 extends Component {
    state = {
        text: ""
    };

    getCheckbox1 = React.createRef();

    addText = () => {
        const checkbox = this.getCheckbox1.current;
        let isChecked = "";
        if (checkbox.checked) {
            isChecked = "checked";
        } else {
            isChecked = "not checked"
        }
        this.setState({text: isChecked})
    }

    render() {

        return (
            <div>

                <input
                    type={"checkbox"}
                    ref={this.getCheckbox1}
                    onClick={this.addText}
                />

                <p> {this.state.text} </p>

            </div>
        )
    }
}

export default Checkbox1;
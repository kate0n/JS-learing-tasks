import React, {Component} from 'react';

class Checkbox1 extends Component {
    state = {
        display: false
    };

    getCheckbox2 = React.createRef();

    addText = () => {
        const checkbox = this.getCheckbox2.current;
        if (checkbox.checked) {
            this.setState({display: true});
        } else {
            this.setState({display: false});
        }
    };

    render() {

        return (
            <div>

                <input
                    type={"checkbox"}
                    ref={this.getCheckbox2}
                    onClick={this.addText}/>

                <div style={{display: this.state.display ? "block" : "none"}}> text text text text</div>

            </div>
        )
    }
}

export default Checkbox1;
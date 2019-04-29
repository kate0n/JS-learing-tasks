import React, {Component} from 'react';

class Radio extends Component {
    state = {
        radio: ""
    };

    getRadio1 = React.createRef();
    getRadio2 = React.createRef();
    getRadio3 = React.createRef();


    getRadioValue = () => {
        const radio1 = this.getRadio1.current;
        const radio2 = this.getRadio2.current;
        const radio3 = this.getRadio3.current;
        let radio = "";
        if (radio1.checked) {
            radio = radio1.value;
        } else if (radio2.checked) {
            radio = radio2.value;
        } else if (radio3.checked) {
            radio = radio3.value;
        }
        this.setState({radio: radio})
    };

    render() {

        return (
            <form onClick={this.getRadioValue}>
                <input
                    type={"radio"}
                    id={"1"}
                    value={"1"}
                    name={"numbers"}
                    ref={this.getRadio1}
                />
                <label htmlFor={"1"}> 1 </label>
                <input
                    type={"radio"}
                    id={"2"}
                    value={"2"}
                    name={"numbers"}
                    ref={this.getRadio2}
                />
                <label htmlFor={"1"}> 2 </label>

                <input
                    type={"radio"}
                    id={"3"}
                    value={"3"}
                    name={"numbers"}
                    ref={this.getRadio3}
                />
                <label htmlFor={"1"}> 3 </label>

                <div> {this.state.radio} </div>

            </form>
        )
    }
}

export default Radio;
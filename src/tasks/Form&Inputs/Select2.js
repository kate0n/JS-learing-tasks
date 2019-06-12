import React, {Component} from 'react';

class Select2 extends Component {
    state = {
        colors: ["red", "green", "blue", "orange", "purple", "orange"],
        color: "red"
    };

    getSelect2 = React.createRef();

    getOption2 = () => {
        const select = this.getSelect2.current;
        const text = select.options[select.selectedIndex].text;
        this.setState({color: text})
    }

    render() {
        const colors = this.state.colors.map(color => <option> {color} </option>)
        return (
            <div>
                <select ref={this.getSelect2} onChange={this.getOption2}>
                    {colors}
                </select>

                <div style={{backgroundColor: this.state.color, height: "30px"}}></div>

            </div>
        )
    }
}

export default Select2;
import React, {Component} from 'react';

class Select extends Component {
    state = {
        cities: ["Moscow", "SPb", "Paris", "Toronto", "London"],
        option: ""
    };

    getSelect = React.createRef();

    getOption = () => {
        const select = this.getSelect.current;
        const text = select.options[select.selectedIndex].text;
        this.setState({option: text})
    }

    render() {
        const cities = this.state.cities.map(city => <option> {city} </option>)
        return (
            <div>
                <select ref={this.getSelect} onChange={this.getOption}>
                    {cities}
                </select>

                <p> {this.state.option} </p>

            </div>
        )
    }
}

export default Select;
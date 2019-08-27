import React, {Component} from 'react';

class AddOptionFromInput extends Component {
    state = {
        options: ["1", "2", "3"],
    };

    getOptionValue = React.createRef();

    addNewOption = () => {
        let newOption= this.getOptionValue.current.value;
        this.setState({options: [...this.state.options, newOption]});
        console.log(this.state.options);
    };

    render() {
        return (
            <div>
                <input ref={this.getOptionValue}/>
                <button onClick={this.addNewOption}> Add new option </button> 

                <select>
                {
                    this.state.options.map(option =>
                    <option> {option} </option>)
                }
                </select>
            </div>
            )
    }
}

export default AddOptionFromInput;
import React, {Component} from 'react';

class Radio extends Component {
    state = {
        radio: ""
    };

    handleRadio = event => {
        this.setState({ radio: event.target.value });
    };

    render() {

        return (
            <form>
                <input
                    type={"radio"}
                    id={"radio1"}
                    value={"1"}
                    name={"numbers"}
                    onChange={this.handleRadio}/>
                <label htmlFor={"radio1"}> 1 </label>

                <input
                    type={"radio"}
                    id={"radio12"}
                    value={"2"}
                    name={"numbers"}
                    onChange={this.handleRadio}/>
                <label htmlFor={"radio2"}> 2 </label>

                <input
                    type={"radio"}
                    id={"radio13"}
                    value={"3"}
                    name={"numbers"}
                    onChange={this.handleRadio}/>
                <label htmlFor={"radio3"}> 3 </label>

                <div> {this.state.radio} </div>

            </form>
        )
    }
}

export default Radio;
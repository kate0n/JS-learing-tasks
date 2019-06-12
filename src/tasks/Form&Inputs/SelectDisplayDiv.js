import React, {Component} from 'react';

class SelectDisplayDiv extends Component {
    state = {
        makrs: ["1", "2", "3"],
        display1: "block",
        display2: "none",
        display3: "none"
    };

    getSelect4 = React.createRef();

    getOption4 = () => {
        const select = this.getSelect4.current;
        const selectedText = select.options[select.selectedIndex].text;
        if(selectedText === "1") {
            this.setState({ display1: "block"})
            this.setState({ display2: "none"})
            this.setState({ display3: "none"})
        } else if(selectedText === "2") {
            this.setState({ display1: "none"})
            this.setState({ display2: "block"})
            this.setState({ display3: "none"})
        } else if(selectedText === "3") {
            this.setState({ display1: "none"})
            this.setState({ display2: "none"})
            this.setState({ display3: "block"})
        }
    }

    render() {
        const marks = this.state.makrs.map(mark => <option> {mark} </option>)
        return (
            <div>
                <select ref={this.getSelect4} onChange={this.getOption4}>
                    {marks}
                </select>

                <div style={{display: this.state.display1}}> text 1 </div>
                <div style={{display: this.state.display2}}> text 2 </div>
                <div style={{display: this.state.display3}}> text 3 </div>

            </div>
        )
    }
}

export default SelectDisplayDiv;
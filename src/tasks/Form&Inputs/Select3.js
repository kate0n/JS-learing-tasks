import React, {Component} from 'react';

class Select3 extends Component {
    state = {
        makrs: ["не отмечено", "отмечено"]
    };

    getSelect3 = React.createRef();
    getCheckbox3 = React.createRef();

    getOption3 = () => {
        const select = this.getSelect3.current;
        const checkbox = this.getCheckbox3.current;
        const isMarked = select.options[select.selectedIndex].text;
        if (isMarked == "отмечено") {
            checkbox.checked = true;
        } else if (isMarked == "не отмечено") {
            checkbox.checked = false;
        }
    }

    render() {
        const marks = this.state.makrs.map(mark => <option> {mark} </option>)
        return (
            <div>
                <select ref={this.getSelect3} onChange={this.getOption3}>
                    {marks}
                </select>
                <input
                    type={"checkbox"}
                    ref={this.getCheckbox3}
                    onClick={this.addText}/>

                <div style={{backgroundColor: this.state.color, height: "30px"}}></div>

            </div>
        )
    }
}

export default Select3;
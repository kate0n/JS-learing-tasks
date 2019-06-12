import React, {Component} from 'react';

class Textarea extends Component {
    state = {
        text: ""
    };

    getTextarea = React.createRef();

    addText = () => {
        const text = this.getTextarea.current.value;
        this.setState({text: text})
    }

    render() {

        return (
            <div>
                <textarea
                    ref={this.getTextarea}
                    onKeyUp={this.addText} />
                <p> {this.state.text} </p>
            </div>
        )
    }
}

export default Textarea;
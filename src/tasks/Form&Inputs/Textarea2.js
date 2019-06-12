import React, {Component} from 'react';

class Textarea2 extends Component {
    state = {
        texts: []
    };

    getTextarea2 = React.createRef();

    addText = () => {
        const inputText = this.getTextarea2.current.value;
        this.setState({texts: [...this.state.texts, inputText]});
    };

    render() {
        const textP = this.state.texts.map(text => <p> {text} </p>);
        return (
            <div>
                <textarea
                    ref={this.getTextarea2}/>

                <button onClick={this.addText}> Add text</button>

                {textP}
            </div>
        )
    }
}

export default Textarea2;
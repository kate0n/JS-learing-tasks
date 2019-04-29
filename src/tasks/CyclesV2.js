import React, {Component} from 'react';

class CyclesV2 extends Component {
    state = {
        hrefs: [
            {href: '1.html', text: 'ссылка 1'},
            {href: '2.html', text: 'ссылка 2'},
            {href: '3.html', text: 'ссылка 3'},
        ]
    };

    getHref = React.createRef();
    getText = React.createRef();

    addElement = () => {
        const href = this.getHref.current.value;
        const text = this.getText.current.value;
        this.setState({hrefs: [...this.state.hrefs, {href: href, text: text}]})
    };


    render() {

        const hrefs = this.state.hrefs.map(item => (<li><a href={item.href}>  {item.text}  </a></li>));

        return (
            <div>
                <ul>
                    {hrefs}
                </ul>
                <input
                    ref={this.getHref}/>
                <input
                    ref={this.getText}/>
                <button onClick={this.addElement}> Add</button>
            </div>
        )
    }
}

export default CyclesV2;
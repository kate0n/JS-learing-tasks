import React, {Component} from 'react';

class Arr extends Component {
    state = {
        arr: ['a', 'b', 'c', 'd', 'e']
    }

    getNum2 = React.createRef();

    delElement = () => {
        const num = parseInt(this.getNum2.current.value);
        const delEl = this.state.arr[num - 1];
        this.setState(prevState => ({
            arr: prevState.arr.filter(el => el !== delEl)
        }))
    };

    render() {
        const elemets = this.state.arr.map(el => <li> {el} </li>);
        return (
            <div>

                <ol>
                    {elemets}
                </ol>

                <input ref={this.getNum2}/>

                <button onClick={this.delElement}> Del element</button>

            </div>
        )
    }
}

export default Arr;
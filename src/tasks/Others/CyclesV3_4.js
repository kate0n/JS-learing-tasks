import React, {Component} from 'react';

class CyclesV3_4 extends Component {
    state = {
        names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']
    };

    newName = React.createRef();

    deleteElement = del => {
        this.setState(prevState => ({
            names: prevState.names.filter(name => name !== del)
        }))
    };

    addElement = () => {
        const newName = this.newName.current.value;
        this.setState({names: [...this.state.names, newName]})
    };

    render() {
        const names = this.state.names.map(name => (
            <li>
                {name}
                <button onClick={() => {
                    this.deleteElement(name)
                }}>
                    Удалить пункт
                </button>
            </li>));

        return (
            <div>
                <ul id={"list3"}>
                    {names}
                </ul>
                <input
                    ref={this.newName}/>
                <button onClick={this.addElement}> Добавить пункт</button>

            </div>
        )
    }
}

export default CyclesV3_4;
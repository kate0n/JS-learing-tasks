import React, {Component, Fragment} from 'react';

class CyclesV3_4 extends Component {
    state = {
        names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']
    };

    deleteElement = del => {
        this.setState(prevState => ({
             names: prevState.names.filter(name => name !== del )
        }))
    }

    render() {
        const names = this.state.names.map(name => (
            <li>
                {name}
                <button onClick= {() => {this.deleteElement(name)} }> Удалить пункт </button>
            </li>));

        return (
            <Fragment>
                <ul id={"list3"}>
                    {names}
                </ul>
            </Fragment>
        )
    }
}

export default CyclesV3_4;
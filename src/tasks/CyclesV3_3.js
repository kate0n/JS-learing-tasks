import React, {Component, Fragment} from 'react';

class CyclesV3_2 extends Component {
    state = {
        names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']
    };

    deleteElement = () => {
        const list = document.getElementById("list2");
        const elem = list.lastChild;
        if (elem !== null) {
            list.removeChild(elem)
        }
    }

    render() {
        const names = this.state.names.map(name => (<li> {name} </li>));

        return (
            <Fragment>
                <ul id={"list2"}>
                    {names}
                </ul>
                <button onClick={this.deleteElement}> Удалить последний пункт</button>
            </Fragment>
        )
    }
}

export default CyclesV3_2;
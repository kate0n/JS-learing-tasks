import React, {Component, Fragment} from 'react';

class CyclesV3_2 extends Component {
    state = {
        names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']
    };

    addElement = () => {
        const list = document.getElementById("list");
        const elem = document.createElement("li");
        elem.innerHTML = "Пункт";
        list.appendChild(elem);
    }

    render() {
        const names = this.state.names.map(name =>( <li> {name} </li>));

        return (
            <Fragment>
                <ul id={"list"}>
                    {names}
                </ul>
                <button onClick={this.addElement}> Добавить пункт </button>
            </Fragment>
        )
    }
}

export default CyclesV3_2;
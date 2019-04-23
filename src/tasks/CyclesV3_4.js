import React, {Component, Fragment} from 'react';

class CyclesV3_2 extends Component {
    state = {
        names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']
    };

    deleteElement = (event) => {
        const list = document.getElementById("list3");
        let currentLi = event.target.parentNode;
        list.removeChild(currentLi)
    }

    render() {
        const names = this.state.names.map(name => (
            <li>
                {name}
                <button onClick={this.deleteElement}> Удалить пункт</button>
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

export default CyclesV3_2;
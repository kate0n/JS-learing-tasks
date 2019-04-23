import React, {Component} from 'react';

class CyclesV3_1 extends Component {
    state = {
        names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']
    };
    render() {
        const names = this.state.names.map(name =>( <li> {name} </li>));

        return (
            <ul>
                {names}
            </ul>
        )
    }
}

export default CyclesV3_1;
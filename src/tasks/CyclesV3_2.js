import React, {Component, Fragment} from 'react';

class CyclesV3_2 extends Component {
    state = {
        names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'],
        clicked: false
    };

    addElement = () => {
       this.setState({
           clicked: true
       })
    }

    render() {
        const names = this.state.names.map(name =>( <li> {name} </li>));

        return (
            <Fragment>
                <ul id={"list"}>
                    {names}
                    {this.state.clicked ? <li> Пункт </li> : null}
                </ul>
                <button onClick={this.addElement}> Добавить пункт </button>
            </Fragment>
        )
    }
}

export default CyclesV3_2;
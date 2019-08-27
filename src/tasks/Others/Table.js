import React, {Component, Fragment} from 'react';

class Table extends Component {
    state = {
        users: [
            {name: 'Коля', age: 30},
            {name: 'Вася', age: 40},
            {name: 'Петя', age: 50},
        ]
    }

    getName2 = React.createRef();
    getAge = React.createRef();

    addRow = () => {
        const name = this.getName2.current.value;
        const age = this.getAge.current.value;
        this.setState({users: [...this.state.users, {name: name, age: age}]})
    };

    render() {
        const rows = this.state.users.map(user => (
                <tr>
                    <td> {user.name} </td>
                    <td> {user.age}  </td>
                </tr>
            )
        );
        return (
            <div>
                <table>
                    {rows}
                </table>
                <input
                    ref={this.getName2}/>
                <input
                    ref={this.getAge}/>
                <button onClick={this.addRow}> Add row</button>
            </div>
        )
    }
}

export default Table;
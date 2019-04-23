import React, {Component, Fragment} from 'react';

class States1 extends Component {
    state = {
        name: 'Иван',
        age: 25
    }

    showMessage = () => {
        alert("hello")
    }
    showName = () => {
        alert(this.state.name)
    }
    changeUser = () => {
        this.setState({name: "Коля"});
        this.setState({age: 23})
    }


    render() {
        return (
            <Fragment>
                <div>
                    имя: {this.state.name}, возраст: {this.state.age}
                    <button onClick={this.showMessage}> Message</button>
                    <button onClick={this.showName}> Show Name</button>
                    <button onClick={this.changeUser}> Change User</button>
                </div>
            </Fragment>

        );
    }
}

class States extends Component {
    state = {
        users: [
            {name: 'Иван', age: 25},
            {name: 'Василиса', age: 18},
            {name: 'Николай', age: 31},
            {name: 'Петр', age: 33},
            {name: 'Ирина', age: 40},
            {name: 'Ибрагим', age: 28},
        ],
        name: "Иван",
        age: 25
    }

    prev = () => {
        let i = 0;
        i++;
        this.setState( {name: this.state.users[i].name} );
        this.setState({age: this.state.users[i].age} );
        i++;
    }

    next = () => {
        let i = 0;
        i--;
        this.setState( {name: this.state.users[i].name} );
        this.setState({age: this.state.users[i].age} );
        i++;
    }

    render() {
        return (
            <div>
                имя: {this.state.name}, возраст: {this.state.age}
                <button onClick={this.prev}> Предыдущий </button>
                <button> Следующий</button>
            </div>
        )
    }
}

export default States;

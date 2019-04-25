import React, {Component, Fragment} from 'react';


// просто вывод name/age из стейта
// метод showMessage c алертом
// метод showName с name юзера из стейта
// метод changeUser для смены юзера
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

// переключение состояний

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
        count: 0
    }

    prev = () => {
        if (this.state.count > 0) {
            this.setState({count: this.state.count - 1});
        } else {
            this.setState({count: this.state.users.length - 1});
        }
    }

    next = () => {
        if (this.state.count < this.state.users.length - 1) {
            this.setState({count: this.state.count + 1});
            console.log(this.state.count);
        } else {
            this.setState({count: 0});
        }
    }

    render() {
        let count = this.state.count;
        return (
            <div>
                имя: {this.state.users[count].name}, возраст: {this.state.users[count].age}
                <button onClick={this.prev}> Предыдущий</button>
                <button onClick={this.next}> Следующий</button>
            </div>
        )
    }
}

export default States;

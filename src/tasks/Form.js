import React, {Component, Fragment} from 'react';


class Form extends Component {
    state = {
        name: "",
        surname: "",
        age: "",
        gender: "",
        addRow: false
    }

    addRow = (event) => {
        event.preventDefault();
        this.setState({ addRow: true });
        let nameValue = document.getElementById('name').value;
        let surnameValue = document.getElementById('surname').value;
        let ageValue = document.getElementById('age').value;

        this.setState({
            name: nameValue,
            surname: surnameValue,
            age: ageValue
    })
    }

    render() {
        return (
            <Fragment>
                <form name={"form"}>
                    <input
                        placeholder={"Имя"}
                        id={"name"}/>
                    <input
                        placeholder={"Фамилия"}
                        id={"surname"}/>
                    <input
                        placeholder={"Возраст"}
                        id={"age"}/>

                    <input
                        type={"radio"}
                        name={"gender"}
                        value={"Мужской"}
                        id={"man"}/>
                    <label htmlFor={"man"}> Мужской </label>
                    <input
                        type={"radio"}
                        name={"gender"}
                        value={"Женский"}
                        id={"women"}/>
                    <label htmlFor={"women"}> Женский </label>

                    <button type={"submit"} onClick={this.addRow}> Сохранить</button>
                    <button type={"reset"}> Сброс</button>
                </form>

                <table id="table" border={"1px"}>
                    <caption>Список пользователей</caption>
                    <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Возраст</th>
                        <th>Гендер</th>
                        <th>Кнопки</th>
                    </tr>
                    </thead>
                    {this.state.addRow ?
                        <tr>
                        <th> {this.state.name} </th>
                        <th> {this.state.surname} </th>
                        <th> {this.state.age} </th>
                        <th> {this.state.gender} </th>
                        <th>
                            <button id={"edit"}> Редактировать</button>
                            <button id={"del"}> Удалить</button>
                        </th>
                        </tr>
                        : null}
                </table>
            </Fragment>
        );
    }
}

export default Form;
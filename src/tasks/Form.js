import React, {Component, Fragment} from 'react';


class Form extends Component {
    state = {
        row: [{name: "f", surname: "f", age: "f", gender: ""}]
    }

    getName = React.createRef();
    getSurname = React.createRef();
    getAge = React.createRef();
    // getGender = React.CreateRef();

    addRow = (event) => {
        event.preventDefault();

        this.setState({
            name: this.getName.current.value,
            surname: this.getSurname.current.value,
            age: this.getAge.current.value
        })
    }

    render() {
        const createRows = () => {
            this.state.row.map((item) =>
                <tr>
                    <th> {item.name} </th>
                    <th> {item.surname} </th>
                    <th> {item.age} </th>
                    <th> {item.gender} </th>
                    <th>
                        <button id={"edit"}> Редактировать</button>
                        <button id={"del"}> Удалить</button>
                    </th>
                </tr>
            )
        }

        return (
            <Fragment>
                <form name={"form"}>
                    <input
                        ref={this.getName}
                        placeholder={"Имя"}
                        id={"name"}/>
                    <input
                        ref={this.getSurname}
                        placeholder={"Фамилия"}
                        id={"surname"}/>
                    <input
                        ref={this.getAge}
                        placeholder={"Возраст"}
                        id={"age"}/>

                    <input
                        ref={this.getGender}
                        type={"radio"}
                        name={"gender"}
                        value={"Мужской"}
                        id={"man"}/>
                    <label htmlFor={"man"}> Мужской </label>
                    <input
                        ref={this.getGender}
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

                    {createRows}

                </table>
            </Fragment>
        );
    }
}

export default Form;
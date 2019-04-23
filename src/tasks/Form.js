import React, {Component, Fragment} from 'react';


class Form extends Component {

    addRow = (event) => {
        event.preventDefault();
        const table = document.getElementById('table');
        const row = table.insertRow();
        row.insertCell().innerHTML = document.getElementById('name').value;
        row.insertCell().innerHTML = document.getElementById('surname').value;
        row.insertCell().innerHTML = document.getElementById('age').value;
        row.insertCell().innerHTML = document.getElementById('gender').value;
        row.insertCell().innerHTML = '<button id={"edit"} onClick={this.delUser()}> Редактировать</button> <button id={"edit"}> Удалить </button>';
    }

    delUser = (e) => {
        let cell = e.target.parentNode;
        e.target.remove();
        // const row = btn.parentNode.parentNode;
        // row.parentNode.removeChild(row);
    }

    render() {
        return (
            <Fragment>
                <form>
                    <input
                        type={"text"}
                        placeholder={"Имя"}
                        id={"name"}/>
                    <input
                        type={"text"}
                        placeholder={"Фамилия"}
                        id={"surname"}/>
                    <input
                        type={"text"}
                        placeholder={"Возраст"}
                        id={"age"}/>
                    <input
                        type={"text"}
                        placeholder={"gender"}
                        id={"gender"}/>
                    {/*<input*/}
                    {/*    type={"radio"}*/}
                    {/*    id={"man"}*/}
                    {/*    name={"Гендер"}*/}
                    {/*    value={"Мужской"}*/}
                    {/*    id={"gender"}/>*/}
                    {/*<label for={"man"}> Мужской </label>*/}

                    {/*<input*/}
                    {/*    type={"radio"}*/}
                    {/*    id={"women"}*/}
                    {/*    name={"Гендер"}*/}
                    {/*    value={"Женский"}*/}
                    {/*    id={"gender"}/>*/}
                    {/*<label for={"women"}> Женский </label>*/}

                    <button type={"submit"} onClick={this.addRow}> Сохранить</button>
                    <button type={"reset"}> Сброс</button>
                </form>

                <table id="table" border={"1px"}>
                    <caption>Список пользователей</caption>
                    <tr>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Возраст</th>
                        <th>Гендер</th>
                        <th>Кнопки</th>
                    </tr>
                </table>
                <div id={"buttons"}>
                <button id={"edit"}> Редактировать</button>
                <button id={"del"}> Удалить</button>
                </div>
            </Fragment>
        );
    }
}

export default Form;
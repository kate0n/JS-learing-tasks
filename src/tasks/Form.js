import React, {Component, Fragment} from 'react';


class Form extends Component {

    addRow = (event) => {
        event.preventDefault();
        const table = document.getElementById('table');
        const row = table.insertRow();
        row.insertCell().innerHTML = document.getElementById('name').value;
        row.insertCell().innerHTML = document.getElementById('surname').value;
        row.insertCell().innerHTML = document.getElementById('age').value;

        // проверка наличия свойства checked у радиобатонов
        let checkGender = () => {
            const genderGroup = document.form.gender;
            let genderChecked = "не выбран";
            for (let i = 0; i < genderGroup.length; i++) {
                if (genderGroup[i].checked) {
                    genderChecked = genderGroup[i].value;
                    return genderChecked;
                    break;
                }
            }
        }

        row.insertCell().innerHTML = checkGender();
        row.insertCell().innerHTML = '<button> Редактировать</button> <button onClick={this.delUser}> Удалить </button>';
    }

    deleteUser = (event) => {
        let row = event.target.parentNode.parentNode.rowIndex;
        document.getElementById('table').deleteRow(row);

    }

    editUser = (event) => {
        const table = document.getElementById('table');
        let row = event.target.parentNode.parentNode.rowIndex;
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const age = document.getElementById('age').value;
        // const gender = document.form.gender;
        name.innerHTML = row.cellIndex(0);
        surname.innerHTML = row.cellIndex(1);
        age.innerHTML = row.cellIndex(2);

    }


    render() {
        return (
            <Fragment>
                <form name={"form"}>
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
                </table>
                <div id={"buttons"}>
                    <button id={"edit"}> Редактировать</button>
                    <button id={"del"} onClick={this.deleteUser}> Удалить</button>
                </div>
            </Fragment>
        );
    }
}

export default Form;
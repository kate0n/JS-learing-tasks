import React, {Component, Fragment} from 'react';


class Form extends Component {
    state = {
        row: []
    }

    getName = React.createRef();
    getSurname = React.createRef();
    getAge = React.createRef();
    manRadio = React.createRef();
    womenRadio = React.createRef();

    addRow = (event) => {
        event.preventDefault();
        const name = this.getName.current.value;
        const surname = this.getSurname.current.value;
        const age = this.getAge.current.value;
        const manRadio = this.manRadio.current;
        const womenRadio = this.womenRadio.current;
        let gender = "";
        if (manRadio.checked) {
            gender = manRadio.value;
        } else if (womenRadio.checked) {
            gender = womenRadio.value;
        }
        this.setState({row: [...this.state.row, {name: name, surname: surname, age: age, gender: gender}]})
    };

    delRow = (item) => {
        this.setState(prevState => ({
                row: prevState.row.filter(row => row !== item)
            }))
    };

    editRow = (item) => {
        this.getName.current.value = item.name;
        this.getSurname.current.value = item.surname;
        this.getAge.current.value = item.age;
        if (item.gender == "Женский") {
            this.womenRadio.current.checked = true;
        } else if (item.gender == "Мужской") {
            this.manRadio.current.checked = true;
        }
    };

    render() {
        const createRows = this.state.row.map(item =>
            <tr>
                <th> {item.name} </th>
                <th> {item.surname} </th>
                <th> {item.age} </th>
                <th> {item.gender} </th>
                <th>
                    <button onClick={() => this.editRow(item)}> Редактировать</button>
                    <button onClick={() => this.delRow(item)}> Удалить</button>
                </th>
            </tr>
        )


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
                        ref={this.manRadio}
                        type={"radio"}
                        name={"gender"}
                        value={"Мужской"}
                        id={"man"}/>
                    <label htmlFor={"man"}> Мужской </label>
                    <input
                        ref={this.womenRadio}
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
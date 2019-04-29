import React, {Component} from 'react';

const logins = ["login1 ", "login2 ", "login3 ", "login1 ", "login2 ", "login3 "];
const logins2 = ["login1 ", "login2 ", "login3 ", "login4 ", "login5 ", "login6 "];
const uniqLogins = [...new Set(logins)];
const logins3 = logins2.filter(item => logins.indexOf(item) < 0);

class UpdateArrById extends Component {
    state = {
        costs: [{id: 1, cost: "1000р"}, {id: 2, cost: "2000р"}, {id: 3, cost: "3000р"}]
    }
    changeCost = (id) => {
        const inputValue = document.getElementById(id).value;
        const newCost = {id: id, cost: inputValue};
        console.log(newCost);
        this.setState(prevState => ({ costs: prevState.costs.map(good => good.id === newCost.id ? newCost : good) }))
    }

    deleteGood = (deletedId) => {
        this.setState(prevState => ({ costs: prevState.costs.filter(good => good.id !== deletedId) }))
    }

    render() {
        const costsMap = this.state.costs.map( (item, id) =>
            <p key={id}>
                {`товар ${item.id}`} : {item.cost}
                <input id={item.id} placeholder={`изменить цену ${item.id} товара`}/>
                <button onClick={() => {this.changeCost(item.id)}}> Изменить цену </button>
                <button onClick={() => {this.deleteGood(item.id)}}> Удалить товар </button>
            </p>

        )

        // const goods = this.state.costs.reduce((res, obj) => { return {...res, ...obj}}, {} );
        // console.log(goods);
        return (

            <div>
                <p style={{color: "green"}}> уникальные массивы</p>
                <p> Логины: {logins} </p>
                <p> Уникальные логины: {uniqLogins} </p>

                <p style={{color: "green"}}> обновление объекта в массиве по свойству </p>

                {costsMap}

                <p> {logins3} </p>

            </div>
        )
    }
};

export default UpdateArrById;

// удаление ключа из объекта

// объединение массива объектов

// flatten

// FromPairs

// вычитание из наборов

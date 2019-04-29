import React, {Component} from 'react';


class SubtractArrays extends Component {
    state = {
        elements: ["1", "2", "3", "4", "5", "6"],
        uniqElements: []
    }

    makeArray = () => {
        const elements = this.state.elements;
        const uniqElements = this.state.uniqElements;
        const inputText = document.getElementById("substract").value;
        const arr = inputText.split(" ");
        // вычитаем из введенного массива элементов старые элементы
        this.setState({uniqElements: arr.filter(item => elements.indexOf(item) < 0)});
        // уникальный массив, если было введны новые элементы несколько раз "33 33" в массив пойдет одно 33
        this.setState(prevState => ({uniqElements: [...new Set(prevState.uniqElements)]}))
    }

    render() {
        return (

            <div>
                <p style={{color: "green"}}> Вычитание массивов. введите любые элементы через пробел, содержащие как
                    новые, так и старые элементы </p>

                <p> {`Старые элементы: ${this.state.elements}`} </p>

                <input id={"substract"}/>

                <button onClick={this.makeArray}> Убрать повторяющиеся элементы</button>

                <p> {`новые элементы: ${this.state.uniqElements}`} </p>
            </div>
        )
    }
};

export default SubtractArrays;


// this.setState(prevState => ({ elements: prevState.elements.concat(uniqElements) }))
// console.log(uniqElements);
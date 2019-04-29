import React, {Component} from 'react';


class SubtractArrays extends Component {
    state = {
      user = {
          name: "Имя",
          surname: "Фамилия",
          age: "возраст"
      }
    }

    delKey = () => {

    }

    render() {
        return (

            <div>
                <p style={{color: "green"}}> Удаление ключа из объекта </p>
                <p> {this.state.user.name} </p>
                <button onClick={this.delKey}>  Удалить </button>

                <p> {`новые элементы: ${this.state.uniqElements}`} </p>
            </div>
        )
    }
};

export default SubtractArrays;
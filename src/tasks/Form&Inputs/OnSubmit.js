import React, {Component} from 'react';

export class OnSubmit extends Component {
    state = {
        textValue: "",
        sum: "",
        fullName: ""
    }

    getText = React.createRef();
    getNum1 = React.createRef();
    getNum2 = React.createRef();
    lastname = React.createRef();
    name = React.createRef();
    surname = React.createRef();

    handleClick1 = () => {
        const textValue = this.getText.current.value;
        this.setState({textValue: textValue});
    }

    handleSum = () => {
        const num1 = parseInt(this.getNum1.current.value);
        const num2 = parseInt(this.getNum2.current.value);
        this.setState({sum: num1 + num2});
    }

    handleFullName = () => {
        const lastname = this.lastname.current.value;
        const name = this.name.current.value;
        const surname = this.surname.current.value;
        this.setState({fullName: `${lastname} ${name} ${surname} `});
    }

    render() {
        return (
            <div>
                <p style={{fontSize: "28px"}}> НА SUMBIT </p>
                {/*1 пункт*/}
                <input
                    ref={this.getText}
                    placeholder={"ввывод в абзац"}/>
                <button onClick={this.handleClick1}> Submit</button>
                <p> {this.state.textValue} </p>

                {/*2 пункт*/}
                <input
                    ref={this.getNum1}
                    placeholder={"1 число"}/>
                <input
                    ref={this.getNum2}
                    placeholder={"2 число"}/>
                <button onClick={this.handleSum}> Get sum</button>
                <p> {this.state.sum} </p>

                {/*3 пункт*/}
                <input
                    ref={this.lastname}
                    placeholder={"фамилия"}/>
                <input
                    ref={this.name}
                    placeholder={"имя"}/>
                <input
                    ref={this.surname}
                    placeholder={"отчество"}/>
                <button onClick={this.handleFullName}> Submit</button>
                <p> {this.state.fullName} </p>

            </div>
        )
    }
};

export default OnSubmit;
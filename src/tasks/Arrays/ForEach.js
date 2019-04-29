import React, {Component} from 'react';

class ForEach extends Component {
    state = {
        names: ["Charon Hira", "Mchumba Kurou", "Gabriela Tiina", "Mia Anita", "Aukusti Hughard", "Célestine Ursula", "Cyrilla Gráinne", "Ophelia Vashti", "Toirdelbach Mojca"]
    }

    render() {

        const UpperCaseNames = [];

        this.state.names.forEach((name) => {
            UpperCaseNames.push(name.toUpperCase())
        });

        return (
            <div>
                {UpperCaseNames}
            </div>
        )
    }
};

export default ForEach;

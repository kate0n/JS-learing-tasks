import React, {Component} from 'react';

class Map extends Component {
    state = {
        names: ["Charon Hira", "Mchumba Kurou", "Gabriela Tiina", "Mia Anita", "Aukusti Hughard", "Célestine Ursula", "Cyrilla Gráinne", "Ophelia Vashti", "Toirdelbach Mojca"]
    }

    render() {
        return (
            this.state.names.map((name) => {
                if (name[0] == "C") {
                    return <p style={{color: "red"}}> {name[0].toLowerCase() + name.slice(1)} </p>
                } else {
                    return <p> {name} </p>
                }
            })
        )
    }
};

export default Map;
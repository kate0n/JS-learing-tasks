import React, {Component} from 'react';

class Filter extends Component {
    state = {
        users: [{"id": 1, "name": "Ernest", "email": "ebishop0@myspace.com", "isCustomer": false},
            {"id": 2, "name": "Michael", "email": "mturner1@multiply.com", "isCustomer": false},
            {"id": 3, "name": "Mildred", "email": "mwelch2@google.it", "isCustomer": false},
            {"id": 4, "name": "Jeremy", "email": "jwilson3@hostgator.com", "isCustomer": false},
            {"id": 5, "name": "Judy", "email": "jellis4@ameblo.jp", "isCustomer": true},
            {"id": 6, "name": "Judy", "email": "jrogers5@ow.ly", "isCustomer": false},
            {"id": 7, "name": "Chris", "email": "cbennett6@nasa.gov", "isCustomer": false},
            {"id": 8, "name": "Ruth", "email": "rmason7@simplemachines.org", "isCustomer": true},
            {"id": 9, "name": "Justin", "email": "jmedina8@indiegogo.com", "isCustomer": true},
            {"id": 10, "name": "Dennis", "email": "dflores9@g.co", "isCustomer": true}]
    }
    // ф-я, возвращающая объект пользователя или пустой объект
    findUser = (arr, findName) => {
        let user = arr.find(user => user.name === findName)
        if (user != undefined) {
            return <p> {user.name} </p>
        } else {
            user = {}
        }
    };

    render() {

        const userMildred = this.state.users.find(user => user.name === "Mildred");

        return (
            <div>

                <p style={{color: "purple"}}> .find юзера с именем: {userMildred.name} </p>

                <p> {this.findUser(this.state.users, "Judy")} </p>
            </div>
        )
    }
};

export default Filter;
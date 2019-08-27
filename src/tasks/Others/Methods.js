import React, {Component, Fragment} from 'react';

class Methods extends Component {

    getText = () => {
        return <p> текст </p>;
    }

    getNum1 = () => {
        return 1;
    }
    getNum2 = () => {
        return 2;
    }

    render() {
        return (
            <div>
                {this.getNum1() + this.getNum2()}
            </div>
        );
    }
}

export default Methods;
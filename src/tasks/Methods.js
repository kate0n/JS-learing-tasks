import React, {Component, Fragment} from 'react';

class Methods extends Component {

    getText = () => {
        return <p> текст </p>;
    }

    getNum2 = () => {
        return <p> 2 </p>;
    }

    getNum1 = () => {
        return getNum2();
    }


    render() {
        return (
            <Fragment>
                {this.getNum1()}
            </Fragment>
        );
    }
}

export default Methods;
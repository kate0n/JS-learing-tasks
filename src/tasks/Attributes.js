import React, {Component, Fragment} from 'react';

const attr = "block";
const str = "block";
const forInput = "input-id";
const dataFoo = 42;

class Attributes extends Component {
    render() {
        return (
            <Fragment>

                <div id={attr}>
                    текст
                </div>

                <div className={str}>
                    текст
                </div>

                <label for={forInput}>
                    текст
                </label>

                <div data-foo={dataFoo}>
                    текст
                </div>

            </Fragment>
        );
    }
}

export default Attributes;
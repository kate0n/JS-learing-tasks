import React, {Component} from 'react';

const text1 = <p>текст1</p>;
const text2 = <p>текст2</p>;

class Rendering extends Component {
    render() {
        return (
            <div>
                {text1}
                <p>!!!</p>
                {text2}
            </div>
        );
    }
}

export default Rendering;
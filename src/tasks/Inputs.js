import React, {Fragment} from 'react';

const addText = () => {
    let paragraph = document.getElementById('text');
    let textValue = document.getElementById('input').value;
    paragraph.innerHTML = textValue;
};

const Inputs = () => (
    <Fragment>

        <input id={"input"} type={"text"} onKeyUp={addText}/>
        <p id={"text"}></p>
    </Fragment>
);

export default Inputs;
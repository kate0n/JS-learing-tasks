import React, {Fragment} from 'react';

const addText = () => {
    let paragraph = document.getElementById('text2');
    let textValue = document.getElementById('input2').value;
    paragraph.innerHTML = textValue.toUpperCase();
};

const Inputs = () => (
    <Fragment>

        <input id={"input2"} type={"text"} onKeyUp={addText}/>
        <p id={"text2"}></p>
    </Fragment>
);

export default Inputs;
import React, {Fragment} from 'react';

const addText = () => {
    let paragraph = document.getElementById('text3');
    let textValue = document.getElementById('input3').value;
    paragraph.innerHTML = 2019 - textValue;
};

const Inputs = () => (
    <Fragment>

        <input id={"input3"} type={"text"} onKeyUp={addText}/>
        <p id={"text3"}></p>
    </Fragment>
);

export default Inputs;
import React, {Fragment} from 'react';

const addText = () => {
    let surname = document.getElementById('surname');
    let firstname = document.getElementById('firstname');
    let middlename = document.getElementById('middlename');
    let textValue = document.getElementById('input4').value;

    let arr = textValue.split(" ");
    console.log(arr);

    surname.innerHTML = arr[0];
    firstname.innerHTML = arr[1];
    middlename.innerHTML = arr[2];
};

const Inputs = () => (
    <Fragment>

        <input id={"input4"} type={"text"} onKeyUp={addText}/>
        <p id={"surname"}></p>
        <p id={"firstname"}></p>
        <p id={"middlename"}></p>
    </Fragment>
);

export default Inputs;
import React from 'react';

const arr = ['Коля', 'Вася', 'Петя'];

const nameList = arr.map((name, index) => (<li> {name} – {index + 1} </li>))

const CyclesV1 = () => (
    <ul>
       {nameList}
    </ul>
);

export default CyclesV1;
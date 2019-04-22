import React from 'react';

const arr = ['a', 'b', 'c', 'd', 'e'];

const newArr = arr.map(arrItem => {
    return <li> {arrItem} </li>;
});

const filterArr = arr.filter((arrItem, index) => {
    for (let i=0;  i < arr.length; i++){
    if (index % 2 === 0) {
    return <li> {arrItem} </li> ;} }
});

const upperCase = arr.map(arrItem => {
    return <li> {filterArr} </li>;
});

const Cycles = () => (
    <ul>
        {filterArr}
    </ul>
);

export default Cycles;
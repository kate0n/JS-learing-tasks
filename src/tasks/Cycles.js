import React from 'react';

const arr = ['a', 'b', 'c', 'd', 'e'];

// список из элементов массива
const newArr = arr.map(arrItem => {
    return <li> {arrItem} </li>;
});

// четные
const filterArr = arr.filter((arrItem, index) => {
    // для нечетных
    // if (index % 2 !=== 0) {
    if (index % 2 === 0) {
        return arrItem;
    }
});

const evenArr = filterArr.map(arrItem => {
    return <li> {arrItem} </li>;
});

// вверхний индекс
const upperCase = arr.map(arrItem => {
    return <li> {arrItem.toUpperCase()} </li>;
});

const Cycles = () => (
    <ul>
        {evenArr}
    </ul>
);

export default Cycles;
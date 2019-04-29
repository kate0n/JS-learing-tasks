import React from 'react';

const sum = (a, b) => {
    const sum = a + b;
    return sum;
};

const reflect = (value) => {
    return value;
};

const getTempItem = (id) => {
    return {
        id: id,
        name: "Temp"
    }
};

const puppies = ["batsy", "baffy", "grammy", "vendy"]
const chewToys = puppies.map( puppy => <li> {puppy} </li>)

const myFunc = (name) => (
    <p> Hello {name} </p>
);


export const ArrowFunc = () => (
    <div>

        <p> {sum(2,2)} </p>

        <p> {reflect("hello")} </p>

        <ol>
            {chewToys}
        </ol>
        {myFunc("kate")}
    </div>
);

export default ArrowFunc;
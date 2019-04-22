import React from 'react';

const show = false;

const Condition = () => (
    <div>
        {(show) ? "текст 1" : "текст 2"}
    </div>
);

export default Condition;

import React from 'react'

const ComponentB = ({ textBtn, ClickCtrl }) => {
    const myValue = "from Child Component";
    return (
        <button onClick={ () => { ClickCtrl(myValue) }}> { textBtn } </button>
    )
};

export default ComponentB
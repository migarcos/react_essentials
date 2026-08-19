import React from 'react'

const ComponentB = ({ textBtn }) => {

    const ctrlClick = () => {
        alert("Click was doing")
    }
    return (
        <button onClick={ctrlClick}> { textBtn } </button>
    )
};

export default ComponentB
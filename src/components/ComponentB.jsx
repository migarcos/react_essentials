import React from 'react'

const ComponentB = ({ textBtn, ClickCtrl }) => {
    
    return (
        <button onClick={ClickCtrl}> { textBtn } </button>
    )
};

export default ComponentB
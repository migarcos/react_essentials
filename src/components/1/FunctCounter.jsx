import React, { useState } from 'react'

const FunctCounter = () => {
    // hook use
    const [counter, setCounter ] = useState(0);

    const increase = () => {
      setCounter( (prevCount) => prevCount + 1 );
    };

    const decrease = () => {
      setCounter( (prevCount) => prevCount - 1 );
    };


    return (
        <>
          <h1>Click Counter</h1>
          <p>Count: {counter} </p>
          <div>
            <button onClick={increase}>  ADD </button>
            &nbsp; &nbsp; &nbsp;
            <button onClick={decrease}>  SUBSTRACT </button>
          </div>          
        </>
    );
}

export default FunctCounter;


import React from 'react'
import ComponentC from './ComponentC';

const ComponentA = ({ usrEmoji, title }) => {
  return (
    <div className='wrapper'>
            
            <p> < ComponentC emoji={usrEmoji} /> { title } </p>
    </div>
  )
};

export default ComponentA
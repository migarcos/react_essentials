import React from 'react'

const ComponentA = ({ emoji, title }) => {
  return (
    <div className='wrapper'>
            
            <p>{ emoji }    { title }</p>
    </div>
  )
};

export default ComponentA
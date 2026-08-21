import React from 'react'

const Item = ({product}) => {
  return (
    <>
        <article>
            <h2>{product.name}</h2>
            <p><strong>Precio:</strong> US$ {product.value}</p>
            <button>
                BUY
            </button>
        </article>
    </>
  )
}

export default Item
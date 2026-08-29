import React from 'react'

function ItemCarrito({prod,onClick}) {
    return (
        <>
            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">{prod.nombre}</h5>
                    <p className="card-text">${prod.precio}</p>
                    <button className="btn btn-danger" onClick={onClick}>Remover</button>
                </div>
            </div>
        </>
    )
}

export default ItemCarrito
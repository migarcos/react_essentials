import React from 'react'
import "../../css/prods.css"

const ProdsList = ({ data }) => {
  return (
    <>
        <>
            <section>
                <h2>PRODUCT LIST</h2>
                
                { data.length === 0 ? (
                    <p> E M P T Y  ! </p>
                ) : (
                    <ul>
                        { data.map(
                            (item, index) => (
                                <article key={index}>
                                    <h2>{item.nombre} </h2>
                                    <p class='desc'>{item.descripcion}</p>
                                    <p>US${item.precio}</p>
                                </article>
                            )
                        )}
                    </ul>
                )}
            </section>
        </>
    </>
  )
}

export default ProdsList
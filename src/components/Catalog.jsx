import React from "react";

const Catalog = () => {

    const prods = [
        { id: 1, name: "Shirt", value: 35.75 },
        { id: 2, name: "Pants", value: 45.25 },
        { id: 3, name: "Skirt", value: 40.50 },
        { id: 4, name: "Tie", value: 15.25 },
        { id: 5, name: "Sox", value: 5.75 },
        { id: 6, name: "T-Shirt", value: 10.75 },
        { id: 7, name: "Blouse", value: 23.25 },
    ]

    return (
        <>
            <h2>PRODUCT LIST</h2>
            
            { prods.length === 0 ? (
                <p> E M P T Y  ! </p>
            ) : (
                <ul>
                { prods.map(
                    (prod) => (
                        <li key={prod.id}> {prod.name} - US$ {prod.value} </li>
                    )
                )}
            </ul>
            )}
        </>
    )

}

export default Catalog;
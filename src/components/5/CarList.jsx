import ItemCarrito from './ItemCarrito';

function CartList( {prods} ) {

  return (
    <div className='col-md-3 border-start border-4 border-secondary'>
      <div className='sticky-top'>
        <h2>Shopping Cart</h2>
        { prods.map( prod => (
          < ItemCarrito key={prod.id} prod={prod}
            onClick={ () => { removerItem(prod) } }
          />
        ))}
      </div>
    </div>
  )
}

export default CartList
import React from 'react'

function CartWidget(props) {
  return (
    <div>
      <a href="/">
        <img className='logoCarrito' src="./images/shoppingCart.png" alt="LogoCarrito" />
        <h2 className='counter'>{props.counter}</h2> 
      </a>
    </div>
  )
}

export default CartWidget
//1. importamos el hook de context: usecontext
import React, {useContext} from 'react';
//2. importamos el context que queramos utilizar
import { cartContext } from '../../context/cartContext';
import { Link } from "react-router-dom";



//3. Inicicializamos el contexto deseado.
function CartWidget(props) {
  const miContext = useContext(cartContext)
  console.log(miContext)

  return (
    <div>
      <Link to="/cart">
        <img className='logoCarrito' src="./images/shoppingCart.png" alt="LogoCarrito" />
        <h2 className='counter'>{miContext.itemsIncart()}</h2> 
      </Link>
    </div>
  )
}

export default CartWidget
import React, {useContext} from 'react';
import { cartContext } from '../../context/cartContext';
import { Link } from "react-router-dom";



//3. Inicicializamos el contexto deseado.
function CartWidget(props) {
  const miContext = useContext(cartContext)
  const checkItem = miContext.itemsIncart()

  return (
    <div>
      <Link to="/cart">
        <img className='logoCarrito' src="./images/shoppingCart.png" alt="LogoCarrito" />
        {/* <h2 className='counter'>{miContext.itemsIncart()}</h2>  */}
        {checkItem !== 0 && <span>{checkItem}</span>}
      </Link>
    </div>
  )
}

export default CartWidget
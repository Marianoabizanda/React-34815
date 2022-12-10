import React, { useContext } from 'react';
import { cartContext } from "../../context/cartContext";
import { createOrder, exportArrayToFirestore } from '../../Services/firestore';
import { useNavigate } from "react-router-dom";

import MyButton from '../MyButton/MyButton';
import CartForm from './CartForm';


function CartView() {
    const {cart, removeItem, clear, priceInCart} = useContext(cartContext);
    // crear funciones clear y priceInCart que viene desde context para implementarlo.

    let navigate = useNavigate();

  

    if (cart.length === 0) 
     return ( 
     <div className="cart-container">
       <h1>Carrito Vacío</h1>
     </div> 
     );

     async function handleCheckout(evt,data){
       // Crear nuestro objeto "orden de compra"
       const order = {
         buyer: data,
         items: cart,
         total: 0,
         date: new Date(), //objeto de tipo fecha
       };
       
       const orderId = await createOrder(order);
       navigate(`/thankyou/${orderId}`)
       /*${orderId}*/
       
       //1. Hacer un rendering condicional -> guardamos el id en un State
       //2. Sweet alert/ notificacion -> mostrando el id
       //3. Redirigir al usuario a /thankyou
       //3b. Redirigir al usuario a /thankyou/:orderid (persistencia)
       
       
     }


  return (
    <div className="cart-container">
        { cart.map((item) => (
            <div key={item.id} >
                <img src={item.imgurl} alt={item.title} />
                <h2>{item.title}</h2>
                <h4>${item.price}</h4>
                <h4>unidades:{item.count}</h4>
                <MyButton onTouchButton={()=> removeItem(item.id)} colorBtn="red">Quitar</MyButton>
            </div>
            ))}
            <CartForm onSubmit={handleCheckout}/>
            
            <button onClick={() => {clear()}}>Vaciar carrito</button>
            
    </div>
  );
}

export default CartView;
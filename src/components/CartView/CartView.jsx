import React, { useContext } from 'react';
import { cartContext } from "../../context/cartContext";
import { createOrder, } from '../../Services/firestore';
import { useNavigate } from "react-router-dom";
import "./cartview.css";

import MyButton from '../MyButton/MyButton';
import CartForm from './CartForm';
import Swal from "sweetalert2"



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
         total: priceInCart(),
         date: new Date(), //objeto de tipo fecha
       };
       
       const orderId = await createOrder(order);
       navigate(`/thankyou/${orderId}`)
       /*${orderId}*/
       
       await Swal.fire({
         title:"Gracias por tu compra!",
         text:`El código de tu orden es: ${orderId}`,
         icon:"success",
         button:"aceptar"
       })
           
     }
   
   


  return (
    <div className="cart-container">
      <div className="cart-itemsList">
        { cart.map((item) => (
            <div key={item.id} className="cart-item">
                <img src={item.imgurl} alt={item.title} />
                <h2>{item.title}</h2>
                <h4>${item.price}</h4>
                <h4>unidades:{item.count}</h4>
                <MyButton onTouchButton={()=> removeItem(item.id)} colorBtn="red">Eliminar</MyButton>
            </div>
            
            ))}
             </div>
          <div>
            <h1>Total {priceInCart()}$</h1>
          </div>
          
            <MyButton colorBtn="red" onTouchButton={() => {clear()}}>Vaciar carrito</MyButton>
            <CartForm onSubmit={handleCheckout}/>
          
    </div>
    
  );
}

export default CartView;
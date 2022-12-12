import React from 'react'
import { Link, useParams } from 'react-router-dom'
import MyButton from '../MyButton/MyButton';

function ThankYou() {
    const idOrder = useParams().idOrder
  return (
      <div style={{color:"black" }}>
    <h1>Gracias por tu compra!</h1>
    <h3>El id de tu compra es: <strong> {idOrder} </strong></h3>
    <h4>En breve recibirás un mail con los pasos a seguir</h4>
    <Link to="/">
    <MyButton>Seguir comprando</MyButton>
    </Link>
    </div>
  )
}

export default ThankYou;

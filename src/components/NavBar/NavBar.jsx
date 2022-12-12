import React from 'react'
import CartWidget from './CartWidget'
import "./navbar.css"
import {Link} from "react-router-dom";



function NavBar() {
  return (
      
    <nav className='nav-container'>


         <div className="mensaje-container">
            <h2 id="mensaje">Envios a todo CABA y AMBA. ¡Recibi tu pedido en menos de 24 horas con nuestros envios Express!</h2>
        </div>


        <div className='logoNav'>
            <Link to="/">
            <img id='logo' src="./images/logo-dist.png" alt="logo" />
            </Link>
            
        </div>

        <div className='navGroupList'>
            <ul className='linkList'>
                
                <li id='link'>
                    <Link to="/">Inicio</Link>
                </li>
                <li id='link'>
                    <Link to="/category/vino">Vinos</Link>
                </li>
                <li id='link'>
                     <Link to="/category/cerveza">Cervezas</Link>
                </li>
                <li id='link'>
                     <Link to="/category/whisky">Whiskys</Link>
                </li>
            </ul>

            <div className='logoCart'>
                <li id="logoWidget" >
                    <CartWidget counter="0"/>
                </li>
             </div>
         
        </div>
    </nav>
  )
}

export default NavBar;
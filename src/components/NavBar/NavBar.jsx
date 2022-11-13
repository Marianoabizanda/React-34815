import React from 'react'
import CartWidget from './CartWidget'
import "./navbar.css"
import {Link} from "react-router-dom";



function NavBar() {
  return (
    <nav className='nav-container'>
        <div className='logoNav'>
            <img id='logo' src="./images/logo-dist.png" alt="logo" />
        </div>

        <div className='navGroupList'>
            <ul className='linkList'>
                
                <li id='link'>
                    <Link to="/">Inicio</Link>
                </li>
                <li id='link'>
                    <Link to="/detail">Detalle</Link>
                </li>
                <li id='link'>
                    <a href="/">Productos</a>
                </li>
                <li id='link'>
                     <a href="/">Contacto</a>
                </li>
                <li id='link'>
                     <a href="/">Nosotros</a>
                </li>
                <li id='link'>
                    <CartWidget counter="0"/>
                </li>
         </ul>
        </div>
    </nav>
  )
}

export default NavBar;
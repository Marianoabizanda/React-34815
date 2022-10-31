import React from 'react'
import CartWidget from './CartWidget'
import "./navbar.css"



function NavBar() {
  return (
    <nav className='nav-container'>
        <div className='logoNav'>
            <img id='logo' src="./images/logo-dist.png" alt="logo" />
        </div>

        <div className='navGroupList'>
            <ul className='linkList'>
                
                <li>
                    <a href="http://">Home</a>
                </li>
                <li>
                     <a href="http://">Contacto</a>
                </li>
                <li>
                     <a href="http://">Nosotros</a>
                </li>
                <li>
                    <CartWidget counter="0"/>
                </li>
         </ul>
        </div>
    </nav>
  )
}

export default NavBar
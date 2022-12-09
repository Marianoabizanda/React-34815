import { createContext, useState } from "react";
import products from "../data/data";


// 1. Importamos e Inicializamos el contexto con createContext()
export const cartContext = createContext(); /* cartContext tiene provider adentro, ver siguiente comentario*/
// const ContextProvider = cartContext.Provider; /*sacamos los provider y se lo damos a una variable*/


//  2. creamos el Context Provider
export function CartContextProvider({children}){
    const saludoContext = "Hola Context";
    

    const [cart, setCart] = useState([]);

    function addToCart(product,count){ //funcion para manipular el useState y agregar al carrito.

        /* encontrar si un item esta o no en el carrito... */
        let itemAlreadyInCart = cart.findIndex( 
            (itemInCart) => itemInCart.id === product.id
            );

        let newCart = [...cart];   /*copio el contenido del carrito y lo meto en un array, para no cambiar el cart.*/

        if (itemAlreadyInCart !== -1) {
               newCart[itemAlreadyInCart].count += count;
               setCart(newCart);
        }
        else{       

         //   newCart.push(product,count);*/ de esta forma me trae el producto y la cantidad por separado, entonces...*/
         //   opcion1 newCart.push(...product,count);   
             /*opcion 2*/ product.count = count;
                          newCart.push(product)
     
                          setCart(newCart)
        }

    }


    

    function itemsIncart(){
      
        let total = 0;
        cart.forEach( itemInCart => total = total + itemInCart.count);
        return total;
    }


    function priceInCart(){
        /* calcular el costo total de la compra */
        let totalPrice = 0;
        cart.forEach( (producto) => (totalPrice = totalPrice + (producto.price*producto.cantidad))
        );
        return totalPrice;
        
    }



    function clear(){
    
        /* Vaciar el carrito */
    }



    function removeItem(idRemove){
        /* cart.filter -> filtrar todos los items con un ID diferente a "idRemove" */
        console.log("Eliminando el item:", idRemove);
        const newCart = [...cart];
        newCart.pop();
        setCart(newCart);

    }

  
    function alreadyInCart(id){
        /* return true/false */
      }



    // const value = {
    //     saludoContext,
    //     itemsIncart, 
    //     cart 

    // }
    
    // 3. retornamos el Provider del context creado
    return (
        //  4. para que cualquier componente se pueda conectar a este contexto y acceder a las variables saludocontext y otroSaludo se le pasa una prop llamada value.
        <cartContext.Provider value={{cart, saludoContext, itemsIncart, addToCart, removeItem, clear, priceInCart }}> 
        {children}
        </cartContext.Provider>
    )
}



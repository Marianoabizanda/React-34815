import { useState, useEffect } from 'react';
import React from 'react'
import "./itemlist.css";
import Item from './Item';
import getItems from '../../Services/mockService';




function ItemListContainer() {
  const [products, setProducts] = useState([]);

  async function getItemsAsync() {
    let respuesta = await getItems();
    setProducts(respuesta);
  }

   useEffect(() => {
    getItemsAsync();
    return () => {
      console.log("Componente desmontado");
    };
      }, []);

  return (

    <div className="item-list">
       
      
        {products.map((product) => {  /* por cada producto retorna...  */
        return (
            <Item
            key={product.id}
            id={product.id}
            imgurl={product.imgurl}
            title={product.title}
            price={product.price}
            category={product.category}
            color="yellow"

           />
          )
        })}
        
    </div>
  );
}

export default ItemListContainer








/*ejemplo

{ <Item imgurl="https://http2.mlstatic.com/D_NQ_NP_841743-MLA47967837091_102021-W.webp" 
title="Remera X"
 price={100}
 />

<Item imgurl="https://http2.mlstatic.com/D_NQ_NP_873129-MLA47748358667_102021-W.webp" 
title="Pantalon Y" 
price={200}
/>

<Item imgurl="https://http2.mlstatic.com/D_NQ_NP_837611-MLA49396443918_032022-W.webp" 
title="Zapatillas Z" 
price={500} 
/> }*/

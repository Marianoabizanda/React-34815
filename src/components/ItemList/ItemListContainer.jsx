import { useState, useEffect } from 'react';
import React from 'react'
import "./itemlist.css";
import ItemList from './ItemList';
import { getItemsByCategory, getItemsOrdered } from '../../Services/firestore';

import { useParams } from "react-router-dom";
import Loader from '../Loaders/Loader';




function ItemListContainer() {
  const [products, setProducts] = useState(null);
  /*const [isLoading, setIsLoading] = useState(true);*/
  const { idCategory } = useParams();

  

  async function getItemsAsync() {

    if( !idCategory ){

    let respuesta = await getItemsOrdered();
    setProducts(respuesta);
  }
    else{

      let respuesta = await getItemsByCategory(idCategory)
      setProducts(respuesta)
    }
  }
  
    
   useEffect(() => {
    getItemsAsync();
   }, [idCategory]);


     
  return (<div className='catalogo'>
    <h1>Nuestros productos</h1> 
    {products ? <ItemList products={products}/> : <Loader/>}
     </div>  
     );
      
}

export default ItemListContainer;








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

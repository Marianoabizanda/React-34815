import React from 'react';
import { useState, useEffect } from 'react';
import {getSingleItem} from '../../Services/mockService';
import ItemDetail from './ItemDetail';

import { useParams } from "react-router-dom";





function ItemDetailContainer() {
  const [product, setProduct] = useState([]); /* 2- lo guarda en el estado product */

  /*const paramsUrl = useParams();*/ /* devuelve objeto con los parametros de las rutas*/ 
  /*const id = paramsUrl.id; */
  const { idItem } = useParams(); /*hago lo mismo pero con destr*/
  console.log((useParams));


  async function getItemsAsync() { /* llamo a la funcion que */ 
      let respuesta = await getSingleItem( idItem ); /* 1- llama al que trae 1 solo item */
      setProduct(respuesta);
  }  

   useEffect(() => {
       getItemsAsync(); /* 3- efecto que llama a la funcion y actualiza el estado*/
      }, []);



  return <ItemDetail product={product}/>

}

export default ItemDetailContainer;






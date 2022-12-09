import React from 'react';
import { useState, useEffect } from 'react';
import {getSingleItem} from '../../Services/firestore';
import ItemDetail from './ItemDetail';

import { useParams } from "react-router-dom";
import Loader from '../Loaders/Loader';






function ItemDetailContainer() {
  const [product, setProduct] = useState([]); /* 2- lo guarda en el estado product */
  const [isLoading, setIsLoading] = useState(true);

  /*const paramsUrl = useParams();*/ /* devuelve objeto con los parametros de las rutas*/ 
  /*const id = paramsUrl.id; */
  const { idItem } = useParams(); /*hago lo mismo pero con destr*/
  


  async function getItemsAsync() { /* llamo a la funcion que */ 
      getSingleItem(idItem).then(respuesta=>{ /* 1- llama al que trae 1 solo item */
      setProduct(respuesta);
      setIsLoading(false);
    })
  }  


  //if

   useEffect(() => {
       getItemsAsync(); /* 3- efecto que llama a la funcion y actualiza el estado*/
      }, []);

      


  // if -> retorno anticipado / early return
  if(isLoading)
      return (<Loader/>)
  

  return (
  <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer;






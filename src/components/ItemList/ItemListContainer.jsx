import React from 'react'


function ItemListContainer(props) {
  return (
    <div>
       
        <h1>{props.text}</h1>

    </div>
  )
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

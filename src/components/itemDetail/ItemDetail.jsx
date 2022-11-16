import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";




function ItemDetail({ product }) {
    // 1. declarar un handler para el evento
  // 4. Recibir por parámetro la respuesta de ItemCount

  function onAddToCart(count) {
    alert(`Agregaste ${count} items al carrito!`);
    /* setState(count) */
  }



  return (
    <div className="card-detail-container">
      <div className="card-detail_img">
        <img src={product.imgurl} alt="Product img" />
      </div>
      <div className="card-detail_detail">
        <h2>{product.title}</h2>
        {/* <p>{product.description}</p> */}
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      {/* 2. Pasamos como prop el evento al ItemCount */}
      <ItemCount 
        onAddToCart={onAddToCart} 
        stock={product.stock} 
      />
      {/* ItemCount( {onAddToCart, stock}) */}
    </div>
  );
}

export default ItemDetail;

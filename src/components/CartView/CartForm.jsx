import { useState } from "react";
import MyButton from "../MyButton/MyButton";


export default function CartForm(props) {
    // hacer un solo useState
    const [data, setData] = useState({
      name: '',
      email: '',
      phone: '',
    });
  
    // los eventos hacen "lo mismo"
    function onInputChange(evt) {
      let nameInput = evt.target.name;
      let value = evt.target.value;
      let newData = { ...data };
      newData[nameInput] = value;
      setData(newData);
      console.log(newData);
    }
  
    function onSubmit(evt) {
      if (data.name.lenght === 0) return;  

      evt.preventDefault();
      props.onSubmit(evt, data);
    }
  
    return (
       
      <form onSubmit={onSubmit}>
        {/* convertir los imputs en componentes */}
  
        <div style={{ display: 'flex', marginBottom: 8 }}>
         
          <label htmlFor="name" style={{ width: '100px', marginRight: 4 }}>
            Nombre
          </label>
          <input
            required
            value={data.name}
            name="name"
            type="text"
            onChange={onInputChange}
          />
          
        </div>
  
        <div style={{ display: 'flex', marginBottom: 8 }}>
          <label htmlFor="email" style={{ width: '100px', marginRight: 4 }}>
            Email
          </label>
          <input
            required
            value={data.email}
            name="email"
            type="email"
            onChange={onInputChange}
          />
        </div>
  
        <div style={{ display: 'flex', marginBottom: 8 }}>
          <label htmlFor="phone" style={{ width: '100px', marginRight: 4 }}>
            Teléfono
          </label>
          <input
            required
            value={data.phone}
            name="phone"
            type="text"
            onChange={onInputChange}
          />
        </div>
  
        <button
        disabled={ data.name ==="" || data.phone ==="" || data.email ==="" }
        type="submit">Finalizar compra</button>
      </form>
    );
  }
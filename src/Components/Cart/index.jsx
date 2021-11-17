import React, { useState,useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import api from "../api"

function Cart(){
const [cart, setCart] = useState([]);
const url= "https://ultimate-api-backend.herokuapp.com/order"

const fetchOrders = (url) => {
    axios
      .get(url)
      .then((data) => {
        setCart(data.data);
        console.log(setCart)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchOrders(url);
  }, []);

    return(
        <div>
     <h2>cart</h2>
     {/* <cart.map(item =>(
         <cartItem
         key={item.id}
         item={item}
         />)) */}
     </div>
    )
}

export default Cart;

  
import React, { createContext, useContext, useState } from "react";

const CartContext = React.createContext();

const ItemDetail = ({ product }) => {
    const {setCart, setQnt } =  useContext(CartContext)
    const [ article, setArticle] = useState ();
}

export default CartContext;
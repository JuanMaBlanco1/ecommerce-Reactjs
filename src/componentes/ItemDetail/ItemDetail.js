
import React, { useState, useEffect, useContext } from "react";
import ItemCount from "../ItemCounter/ItemCount";
import Item from "../Item/Item";
import CartContext from "../../contexts/cartContext";

import "./index.scss";
import { Button } from "@material-ui/core";

const ItemDetail = ({ product }) => {
  const { setCart, setQnt } = useContext(CartContext);
  const [article, setArticle] = useState();

  useEffect(() => {
    setArticle(product);
  }, [product]);

  const style = {
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  };

  const styleButtom = {
    width: "86%",
    marginTop: "5px",
    backgroundColor: "green",
    color: "white",
  };

  const [quantity, setQuantity] = useState(1);

  const handleClick = () => {
    setQnt((value) => value + quantity);
    article.quantity = quantity;

    const prod = {
      
      nombre: article.nombre,
      description: article.description,
      stock: article.stock,
      precio: article.precio,
      
      
      quantity: article.quantity,
      
      imagen: article.imagen,
    };

    setCart((value) => [...value, prod]);
  };

  return (
    <div style={style} className="item-detail">
      <Item product={product} />
      <ItemCount
        initial={1}
        min={0}
        max={product.stock}
        setQuantity={setQuantity}
      />
      <Button
        variant="contained"
        color="primary"
        style={styleButtom}
        onClick={handleClick}
        className="item-detail__btn"
      >
        Agregar al carrito {quantity}
      </Button>
    </div>
  );
};

export default ItemDetail;
import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Item = ({ product }) => {
  const { nombre, description, precio, imagen } = product;

  return (
    <div className="link">
      <Link to={`/item/${product.id}`}>
        <div className="counter link__item" style={{ width: "15rem" }}>
          <div className="counter__content">
            <h5 className="card-title">{nombre}</h5>
            <img
              src={imagen}
              className="card-img-top"
              alt="Imagen de Producto"
            />
            <p>{description}</p>
            <h6>${precio}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
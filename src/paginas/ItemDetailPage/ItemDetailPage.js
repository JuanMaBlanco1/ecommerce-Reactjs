import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../../componentes/ItemCounter/ItemCount";
import Loading from "../../componentes/Carga/Loading";
import CartContext from "../../contexts/cartContext";
import { getFirestore } from "../../firebase/fireBase";

import "./index.scss";

const ItemDetailPage = ({ onAdd }) => {
  const { setCart, setQnt } = useContext(CartContext);
  const [article, setArticle] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  console.log(product);
  useEffect(() => {
    const getProductos = () => {
      const db = getFirestore();
      const itemCollection = db.collection("productos");

      itemCollection
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            console.log("No results!");
          }
          setProducts(
            querySnapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        })
        .catch((error) => {
          console.log("Error searching items", error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    getProductos();
  }, [id]);

  useEffect(() => {
    const takeProduct = () => {
      const product = products.filter((product) => product.id === id);
      setProduct(product);
    };
    takeProduct();
  }, [products]);

  useEffect(() => {
    setArticle(products);
  }, [products]);

  const [quantity, setQuantity] = useState(1);

  const handleClick = () => {
    setQnt((value) => value + quantity);
    article.quantity = quantity;

    const prod = {
      id: product[0].id,
      nombre: product[0].nombre,
      description: product[0].description,
      stock: product[0].stock,
      precio: product[0].precio,
      brand: product[0].brand,
      model: product[0].model,
      quantity: product[0].quantity,
      imagen: product[0].imagen,
    };

    setCart((value) => [...value, prod]);
  };

 

  return (
    <div className="itemPage">
      {loading ? (
        <div className="loading-items" style={{ margin: "0 auto" }}>
          <Loading text="Cargando productos..." />
        </div>
      ) : (
        <div className="container itemPage__detail">
          <div className="row">
            {/* IMAGE */}
            <div className="col-sm-12 col-md-8 itemPage__detail-image">
              <div>
              <img
                  src={product[0].imagen}
                  className="card-img-top"
                  alt="Imagen de Producto"
                />
              
              
              </div>
            </div>
            {/* BUY */}
            <div className="col-sm-12 col-md-4 itemPage__detail-buy">
              <div>
                <div className="counter item itemPage__detail-buy-sale">
                  <div className="">
                    <h3 className="card-title">{product[0].nombre}</h3>
                    <p>{product[0].description}</p>
                    <h3>${product[0].precio}</h3>
                    <h6>Stock: {product[0].quantity}</h6>
                  </div>
                  <div className="itemPage__detail-buy-sale-buttons">
                    <ItemCount
                      initial={1}
                      min={0}
                      max={product.quantity}
                      onAdd={onAdd}
                      setQuantity={setQuantity}
                    />
                    <div className="counter btn-buy" style={{ width: "15rem" }}>
                      <div className="counter__buttonAdd">
                        <button onClick={handleClick}>
                          Agregar al carrito {quantity}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <div className="col-sm-12 col-md-8 itemPage__detail-description">
              <div className="itemPage__details">
                <h3>Caracter??sticas:</h3>
                <h5>Marca: {product[0].brand}</h5>
                
                
                <h3>Descripci??n:</h3>
                <h5>{product[0].description}</h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailPage;
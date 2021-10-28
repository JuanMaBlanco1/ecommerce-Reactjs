import React, { useState, useEffect } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";


import "./index.scss";

const ItemCount = ({ initial, min, max, setQuantity }) => {
  const [counter, setCounter] = React.useState(1);
  console.log(counter)

 
  const handleSumar = () => {
    if (counter < 50){ 
    setCounter((prevState) => prevState + 1);
    }
  };
  const handleRestar = () => {
    if (counter > 1) { 
    setCounter((prevState) => prevState - 1);  }
    
  }

  useEffect(() => {
    setQuantity(counter);
  }, [counter, setQuantity]);

  return (
    <div className="counter" style={{ width: "15rem" }}>
      <div className="counter__content">
        <div className="counter__content-controls">
          <span
            className="counter__content-controls-subtract"
            onClick={handleRestar}
          >
            <RemoveIcon />
          </span>
          <span className="counter__content-controls-value"> {counter} </span>
          <span
            className="counter__content-controls-add"
            onClick={handleSumar}
          >
            <AddIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
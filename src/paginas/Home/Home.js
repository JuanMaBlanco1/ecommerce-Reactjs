import React from "react";
import ItemList from "../../componentes/ItemList/index";
import Slider from "../../componentes/Slider/index";


import "./index.scss";

const Home = ({ greeting, onAdd }) => {
  return (
    <main className="home">
      <div className="home__title">
        <h1>{greeting}</h1>
      </div>
      <Slider />
      <ItemList onAdd={onAdd} />
    </main>
  );
};

export default Home;
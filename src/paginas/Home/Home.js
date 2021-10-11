import React from "react";
import ItemList from "../../componentes/ItemList/ItemList";
import Slider from "../../componentes/Slider/Slider";


import "./index.scss";

const Home = ({ greeting, onAdd }) => {
  return (
    <main className="home">
      <div className="home__title">
        <h1>{greeting}</h1>
        <img src="./assets/img/honey.jpeg"/>
      </div>
      <Slider />
      <ItemList onAdd={onAdd} />
    </main>
  );
};

export default Home;
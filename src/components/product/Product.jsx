import React from "react";
import "./styles.css";

export default function Product({ item }) {
  return (
    <main>
      <img className="image" src={item.image} alt={item.name} width="400" />
      <div className="details">
        <h1 className="name">{item.name}</h1>
        <p className="price">Rs {item.price}</p>
        <button className="btn">Add ToCart</button>
      </div>
    </main>
  );
}

import React from "react";
import "./styles.css";

export default function Product({ item }) {
  return (
    <div className="item">
      <img className="image" src={item.image} alt={item.name} />
      <div className="item-head">
        <p className="item-name">{item.name}</p>
      </div>
      <div className="item-foot">
        <span className="item-price">Rs {item.price}</span>
        <button>Add +</button>
      </div>
    </div>
  );
}

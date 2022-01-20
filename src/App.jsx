import React, { useState, useEffect } from "react";
import Product from "./components/product/Product";

import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import Banner from "./components/Home/Banner/index";
import "./App.css";

const App = () => {
  const [product, setProduct] = useState([]);
  const fetchdata = async () => {
    const data = await getDocs(collection(db, "products"));
    const productArray = [];
    data.forEach((ele) => {
      productArray.push(ele.data());
    });
    setProduct(productArray);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  // console.log(product);
  const addProduct = async () => {
    const image = document.getElementById("image").value;
    const price = document.getElementById("price").value;
    const name = document.getElementById("name").value;
    try {
      const docRef = await addDoc(collection(db, "products"), {
        name: name,
        price: parseInt(price),
        image: image,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="container">
      <Banner />

      {/* <input id="image" type="text" placeholder="image url" />
      <input id="name" type="text" placeholder="product name" />
      <input id="price" type="number" placeholder="price" />
      <button onClick={addProduct}>Add Product</button> */}

      {product && product.map((e, i) => <Product key={i} item={e} />)}
    </div>
  );
};
export default App;

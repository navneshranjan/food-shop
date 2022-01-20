import React from "react";
import Logo from "../../common/Logo";
import "./styles.css";

const Banner = () => {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <div className="content-main">
          <h1>Better way to start Shopping</h1>
          <p>Products at door steps</p>
          <button>View menu</button>
        </div>
      </div>
      <img src="./download.png" className="header-img" alt="banner " />
    </header>
  );
};

export default Banner;

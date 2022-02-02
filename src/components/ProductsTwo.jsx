import React from "react";
import Products from "./Products";
import Stats from "../assets/statss.svg";

const ProductsTwo = () => {
  return (
    <Products
      image={<img src={Stats} className="img-fluid" alt="some" />}
      title="Our Products Are"
      primarytext="As the benefits of this amazing technology 
      should be shared by all, we are currently 
      well advanced in developing 
      a pay system."
      secondarytext="Catering specifically for the massive small business
      market, that would offer the sophisticated functionality
      of our technology at an economical cost. Our MINNIE
      product with maximal impact"
      extraClasses="products-two"
      ti={true}
    />
  );
};

export default ProductsTwo;

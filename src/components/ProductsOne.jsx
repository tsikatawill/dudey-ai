import React from "react";
import Products from "./Products";
import ProdOne from "../assets/productsOne.jpeg";

const ProductsOne = () => {
  return (
    <Products
      image={<img src={ProdOne} className="img-fluid" alt="some" />}
      title="Our Products Are"
      primarytext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fuga, a porro natus cum tenetur debitis provident, eos voluptatibus optio dolorem. Vel architecto veritatis molestias hic illum voluptate repellat. Beatae!"
      secondarytext="Itaque fuga, a porro natus cum tenetur debitis provident, eos voluptatibus optio dolorem. Vel architecto veritatis molestias hic illum voluptate repellat. Beatae!"
      btnText="BUY COINS NOW"
      btnVersion="primary"
    />
  );
};

export default ProductsOne;

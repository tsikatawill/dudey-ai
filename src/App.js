import React from "react";
import DetailCards from "./components/DetailCards";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import ProductsOne from "./components/ProductsOne";
import WhyInvest from "./components/WhyInvest";

const App = () => {
  return (
    <div>
      <Header />
      <DetailCards />
      <WhyInvest />
      <Newsletter />
      <ProductsOne />
      <div className="space" style={{ height: "400px" }}></div>
    </div>
  );
};

export default App;

import React from "react";
import BottomCta from "./components/BottomCta";
import CommunicationChannels from "./components/CommunicationChannels";
import DetailCards from "./components/DetailCards";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import ProductsOne from "./components/ProductsOne";
import ProductsTwo from "./components/ProductsTwo";
import Team from "./components/Team";
import WhyInvest from "./components/WhyInvest";

const App = () => {
  return (
    <div>
      <Header />
      <DetailCards />
      <WhyInvest />
      <Newsletter />
      <ProductsOne />
      <Team />
      <ProductsTwo />
      <CommunicationChannels />
      <BottomCta />
      <div className="space" style={{ height: "400px" }}></div>
    </div>
  );
};

export default App;

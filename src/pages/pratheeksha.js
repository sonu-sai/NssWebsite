import React from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import SliderPratheeksha from "../components/slider-pratheeksha";

const PratheekshaPage = () => (
  <div className="mainbody">
    <SEO title="PratheekshaPage" />
    <Header />
    <SliderPratheeksha />
    <div className="container">
      <h1> PratheekshaPage</h1>
    </div>
    <Footer />
  </div>
);
export default PratheekshaPage;

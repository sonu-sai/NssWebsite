import React from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import SliderSanthwanam from "../components/slider-santhwanam";

const SanthwanamPage = () => (
  <div className="mainbody">
    <SEO title="Santhwanam" />
    <Header />
    <SliderSanthwanam />
    <div className="container">
      <h1>SanthwanamPage</h1>
    </div>
    <Footer />
  </div>
);
export default SanthwanamPage;

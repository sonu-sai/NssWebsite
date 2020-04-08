import React from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import SliderUnarv from "../components/slider-unarv";

const UnarvPage = () => (
  <div className="mainbody">
    <SEO title="Unarv" />
    <Header />
    <SliderUnarv />
    <div className="container">
      <h1>UnarvPage</h1>
    </div>
    <Footer />
  </div>
);
export default UnarvPage;

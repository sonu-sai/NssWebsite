import React from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import SliderIndex from "../components/slider-index";
const IndexPage = () => (
  <div className="mainbody">
    <SEO title="Home" />
    <Header />
    <SliderIndex />
    <div className="container">
      <h1>WHAT ARE WE ?</h1>
      <p>Quotes</p>
    </div>
    <Footer />
  </div>
);

export default IndexPage;

import React from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import SliderAbout from "../components/slider-about";

const AboutUsPage = () => (
  <div className="mainbody">
    <SEO title="AboutUs" />
    <Header />
    <div className="container">
      <SliderAbout />
      <h1>About Us Page</h1>
    </div>
    <Footer />
  </div>
);
export default AboutUsPage;

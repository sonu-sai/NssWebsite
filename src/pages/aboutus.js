import React from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const AboutUsPage = () => (
  <div className="mainbody">
    <SEO title="AboutUs" />
    <Header />
    <div className="container">
      <h1>This is About Us Page</h1>
    </div>
    <Footer />
  </div>
);
export default AboutUsPage;

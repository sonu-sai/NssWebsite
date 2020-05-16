import React from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import SliderIndex from "../components/slider-index";
import Quotes from "../components/quotes";
const IndexPage = () => (
  <div className="mainbody">
    <SEO title="Home" />
    <Header />
    <div className="container">
      <SliderIndex />
      <div  className="mainText">
        <h1>WHAT ARE WE ?</h1>
        <p>
        NSS NSSCE, student volunteer body in the campus of NSS College of Engineering
        was set up as a part of National Service Scheme nearly 2 decades ago aiming 
        for the participation of students in social as well as public welfare activities 
        and to give a helping hand as well as support for the destitute and impoverished. 
        Driven by the motto of NOT ME BUT YOU and with the joint effort of about 200 volunteers,
        NSS NSSCE has lived and is living up to it’s expectation by being one of the most active and 
        leading student volunteer body in various community welfare and environmental activities. 
        Guided with knowledge and kindness and feeling with love and empathy, the volunteers organizes 
        and conducts various activities and awareness programs with our squad goal being ‘Spreading 
        happiness through our service’.
        </p>
      </div>
      <div>
        <Quotes />
      </div>
    </div>
    <Footer />
  </div>
);

export default IndexPage;

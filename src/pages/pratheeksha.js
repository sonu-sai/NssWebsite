import React from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import SliderPratheeksha from "../components/slider-pratheeksha";

const PratheekshaPage = () => (
  <div className="mainbody">
    <SEO title="PratheekshaPage" />
    <Header />
    <div className="container">
      <SliderPratheeksha />
      <div className="mainText">
        <h1>PRATHEEKSHA</h1>
        <p>
          “To give blood you need neither extra strength nor extra food, just
          your will to save a life” Pratheeksha, The Ray of Hope blood donation
          unit of NSS NSSCE is one of our prestigious projects. To give blood is
          to give life and we were able to save the life of many. Just within a
          span of two years, our volunteers have conducted 4 blood donation
          camps where we collected nearly 70 units of blood per camp. We also
          arranged nearly 100+ units of blood to the needy in and around
          Palakkad as well as other districts, extending our hands throughout
          the State associating with Blood Donors Kerala. Under the guidance of
          our program officers and with the joint effort and dedication of the
          volunteers, our project is becoming a greater success day by day
          earning recognition from the district as well as the state. As an
          appreciation for the outstanding performance of our blood donation
          unit in Palakkad district, our unit was awarded ‘The best blood
          donation unit‘ award and also three of our volunteers were given ‘The
          best volunteer’ award for their noteworthy contributions. Blood
          donation means few minutes to you but it is life for somebody, a ray
          of hope for somebody, PRATHEEKSHA for somebody; this is what we want
          to give and what we want to tell the world.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);
export default PratheekshaPage;

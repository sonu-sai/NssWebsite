import React from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import SliderUnarv from "../components/slider-unarv";

const UnarvPage = () => (
  <div className="mainbody">
    <SEO title="Unarv" />
    <Header />
    <div className="container">
      <SliderUnarv />
      <div className="mainText">
        <h1>UNARV</h1>
        <p>
          The secret of every student's success is to showcase their potential.
          The coordination of the surrounding factors is essential for student
          success in his or her life. Every element of society plays a
          significant role in the evolution of his growth. It is the
          responsibility of each and every community to provide the kind of
          support that is appropriate for the growth and development of each
          student's life. Although the government, local residents and
          volunteers provide them with all the facilities, many children are
          being held back from achieving life because of the misunderstanding
          among the children and the lack of opportunities to interact with the
          outside community. Due to lack of timely guidance many give up their
          studies,eventhough they skills. It is in this context that the 60th
          Anniversary of the NSS Engineering College, Palakkad and the 50th
          Anniversary of the National Service Scheme, National Service Scheme
          Unit 128 & 198 and Attapadi Government Tribal Hospital jointly came up
          with the concept of 'UNARV'.
        </p>
        <p>
          'UNARV' ,the program aims to interact with children in government
          schools in Attapady taluk at least twice a month, thereby organizing
          children's personality development, language improvisation, decision
          making skills, create a goal, computer training classes and carrier
          orientation. We have the absolute belief that such activities can lead
          children to the light of knowledge, be more connected to the outside
          world, and better mold them. The 'UNARV' project aims to guide a
          society that lives only in the lower layers of society and to look
          beyond what we see.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);
export default UnarvPage;

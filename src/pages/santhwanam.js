import React from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import SliderSanthwanam from "../components/slider-santhwanam";

const SanthwanamPage = () => (
  <div className="mainbody">
    <SEO title="Santhwanam" />
    <Header />
    <div className="container">
      <SliderSanthwanam />
      <div className="mainText">
        <h1>PALLIATIVE CARE UNIT</h1>
        <p>
          According to WHO, Palliative care is an approach that improves the
          quality of life of patients and their families facing the problem
          associated with life-threatening illness, through the prevention and
          relief of suffering by means of early identification and impeccable
          assessment and treatment of pain and other problems, physical,
          psychosocial and spiritual.
        </p>
        <h1>SANTHWANAM</h1>
        <p>
          In today's world surviving the disease when effective treatment
          facilities are available is not a big deal. But, the physical,
          psychological and financial challenges a patient and family face
          before and after their survival are still far from over, which is the
          main aim of Palliative Care or Santhwanam, to provide all of the above
          to a patient. It is on this principal, 'Santhwanam' the palliative
          care unit is working under the National Service Scheme units 128&198
          at NSS College of Engineering. This initiative is aimed at helping the
          needy and the financially disadvantaged. The unit has also been able
          to provide a helping hand to many patients. The unit is a holistic
          service of its kind that addresses the emotional and social problems
          of the patient rather than financial aid. Volunteers jointly raise
          funds in both units under the expert supervision of program officers.{" "}
        </p>
      </div>
    </div>
    <Footer />
  </div>
);
export default SanthwanamPage;

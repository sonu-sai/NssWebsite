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
      <div className="mainText">
        <h1> Who are WE?</h1>
        <p>
          NSS NSSCE, student volunteer body in the campus of NSS College of
          Engineering was set up as a part of National Service Scheme nearly 2
          decades ago aiming for the participation of students in social as well
          as public welfare activities and to give a helping hand as well as
          support for the destitute and impoverished. Under the guidance of
          respective authorities and faculties, we improvised progressively
          throughout these years such that now we can proudly declare that we
          were able to bring about remarkable changes and make noteworthy
          contributions.
        </p>
        <p>
          NSS cell of our college gave students not only an opportunity to show
          their social commitment and willingness to help the needy, but also
          gave them a platform for self-improvement and personality development
          through community service. Driven by the motto of NOT ME BUT YOU and
          with the joint effort of about 200 volunteers, NSS NSSCE has lived and
          is living up to it’s expectation by being one of the most active and
          leading student volunteer body in various community welfare and
          environmental activities. We also organise programs that assist the
          underprivileged together with their empowerment activities. Guided
          with knowledge and kindness and feeling with love and empathy, we
          volunteers dedicates ourselves to various activities and awareness
          along with empowerment programs with our squad goal being ‘Spreading
          happiness through our service’.
        </p>
        <p>
          If we have the ability to help atleast one person, do it because a
          help arrived at the right time can even save a life. This is our
          common thread and our mantra.{" "}
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

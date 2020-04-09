import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        slide01: file(relativePath: { eq: "slide1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    // slide02: file(relativePath: { eq: "slide2.jpg" }) {
    //   childImageSharp {
    //     fluid(maxWidth: 1200) {
    //       ...GatsbyImageSharpFluid
    //     }
    //   }
    // }

    // slide03: file(relativePath: { eq: "slide3.jpg" }) {
    //   childImageSharp {
    //     fluid(maxWidth: 1200) {
    //       ...GatsbyImageSharpFluid
    //     }
    //   }
    // }

    render={(data) => (
      <div>
        <div className="slideshow-container">
          <div className="mySlides fade">
            <Img fluid={data.slide01.childImageSharp.fluid} />
          </div>

          {/* <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
            <Img fluid={data.slide02.childImageSharp.fluid} />
            <div className="text">Caption Two</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
            <Img fluid={data.slide03.childImageSharp.fluid} />
            <div className="text">Caption Three</div>
          </div> */}

          <a className="prev" onclick="plusSlides(-1)">
            &#10094;
          </a>
          <a className="next" onclick="plusSlides(1)">
            &#10095;
          </a>
        </div>

        <div style={{ textAlign: `center` }}>
          <span className="dot" onclick="currentSlide(1)"></span>
          <span className="dot" onclick="currentSlide(2)"></span>
          <span className="dot" onclick="currentSlide(3)"></span>
        </div>
      </div>
    )}
  />
);

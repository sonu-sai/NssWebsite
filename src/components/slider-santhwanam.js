import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Carousel } from "react-bootstrap";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        slide01: file(relativePath: { eq: "santhwanamSlide1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        slide02: file(relativePath: { eq: "santhwanamSlide2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        slide03: file(relativePath: { eq: "santhwanamSlide3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <div>
        {/* // style={{
        //   maxWidth: `1200px`,
        //   maxHeight: `500px`,
        //   paddingLeft: `150px`,
        //   paddingRight: `150px`,
        //   marginBottom: `1.45rem`,
        // }} */}

        <Carousel>
          <Carousel.Item>
            <div className="sliderImage">
              <Img
                style={{
                  maxWidth: `100%`,
                  // maxHeight: `500px`,
                  marginBottom: `1.45rem`,
                }}
                fluid={data.slide01.childImageSharp.fluid}
                className="sliderImage"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="sliderImage">
              <Img
                style={{
                  maxWidth: `100%`,
                  //maxHeight: `600px`,
                  marginBottom: `1.45rem`,
                }}
                fluid={data.slide02.childImageSharp.fluid}
                className="sliderImage"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="sliderImage">
              <Img
                style={{
                  maxWidth: `100%`,
                  //maxHeight: `600px`,
                  marginBottom: `1.45rem`,
                }}
                fluid={data.slide03.childImageSharp.fluid}
                className="sliderImage"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    )}
  />
);

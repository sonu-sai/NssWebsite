import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Carousel } from "react-bootstrap";

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

        slide02: file(relativePath: { eq: "slide2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        slide03: file(relativePath: { eq: "slide3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <div
        style={{
          maxWidth: `100%`,
          Height: `500px`,
        }}
      >
        <Carousel>
          <Carousel.Item>
            <div className="sliderImage">
              <Img
                style={{
                  maxWidth: `100%`,
                  Height: `500px`,
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
                  Height: `500px`,
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
                  Height: `500px`,
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

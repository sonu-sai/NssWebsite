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
        <Carousel>
          <Carousel.Item>
            <Img fluid={data.slide01.childImageSharp.fluid} />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={data.slide02.childImageSharp.fluid} />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={data.slide03.childImageSharp.fluid} s />
          </Carousel.Item>
        </Carousel>
      </div>
    )}
  />
);

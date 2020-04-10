import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        quote01: file(relativePath: { eq: "quote1.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        quote02: file(relativePath: { eq: "quote2.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        quote03: file(relativePath: { eq: "quote3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="gridContainerCard">
        <div class="quoteCard">
          <Img
            className="quoteImage"
            fluid={data.quote01.childImageSharp.fluid}
          />
          <div className="quoteCardContainer">
            <p style={{ width: `250px`, height: `80px`, textAlign: `center` }}>
              <span style={{ color: `red` }}>" </span>
              The best way to find yourself is to lose yourself in the service
              of others.<span style={{ color: `red` }}> "</span>
            </p>
            <h5 style={{ textAlign: `right` }}>- Mahathma Gandhi</h5>
          </div>
        </div>
        <div class="quoteCard">
          <Img
            className="quoteImage"
            fluid={data.quote02.childImageSharp.fluid}
          />
          <div className="quoteCardContainer">
            <p style={{ width: `250px`, height: `80px`, textAlign: `center` }}>
              <span style={{ color: `red` }}>" </span>
              In this life We cannot do GREAT things.We can only do small things
              with GREAT love.
              <span style={{ color: `red` }}>"</span>
            </p>
            <h5 style={{ textAlign: `right` }}>- Mother Teresa</h5>
          </div>
        </div>
        <div class="quoteCard">
          <Img
            className="quoteImage"
            fluid={data.quote03.childImageSharp.fluid}
          />
          <div className="quoteCardContainer">
            <p style={{ width: `250px`, height: `80px`, textAlign: `center` }}>
              <span style={{ color: `red` }}>" </span>I attribute my succes to
              this - I never gave or took any execuse.{" "}
              <span style={{ color: `red` }}>"</span>
            </p>
            <h5 style={{ textAlign: `right` }}>- Florence Nightingale</h5>
          </div>
        </div>
      </div>
    )}
  />
);

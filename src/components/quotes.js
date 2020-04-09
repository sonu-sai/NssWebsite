import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Card } from "react-bootstrap";
import { CardDeck } from "react-bootstrap";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        quote01: file(relativePath: { eq: "mahathmaGandhi.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        quote02: file(relativePath: { eq: "motherTeresa.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        quote03: file(relativePath: { eq: "florenceNightingale.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <CardDeck>
        <Card>
          <Img
            className="quote-image"
            fluid={data.quote01.childImageSharp.fluid}
          />
          <Card.Body>
            <Card.Text>
              <p style={{ width: `290px`, height: `72px` }}>
                <span style={{ color: `red` }}>"</span>
                The best way to find yourself is to lose yourself in the service
                of others. <span style={{ color: `red` }}>"</span>
              </p>
              <p style={{ textAlign: `right` }}>- Mahathma Gandhi</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Img
            style={{ width: `326px`, height: `245px` }}
            fluid={data.quote02.childImageSharp.fluid}
          />
          <Card.Body>
            <Card.Text>
              <p style={{ width: `290px`, height: `72px` }}>
                <span style={{ color: `red` }}>"</span>
                In this life We cannot do GREAT things.We can only do small
                things with GREAT love.
                <span style={{ color: `red` }}>"</span>
              </p>
              <p style={{ textAlign: `right` }}>- Mother Teresa</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Img
            style={{ width: `326px`, height: `245px` }}
            fluid={data.quote03.childImageSharp.fluid}
          />
          <Card.Body>
            <Card.Text>
              <p style={{ width: `290px`, height: `72px` }}>
                <span style={{ color: `red` }}>"</span>I attribute my succes to
                this - I never gave or took any execuse.{" "}
                <span style={{ color: `red` }}>"</span>
              </p>
              <p style={{ textAlign: `right` }}>- Florence Nightingale</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    )}
  />
);

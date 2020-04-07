import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default props => {
    console.log(props.data);
    return (
        <div className='mainbodyImage'>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <h1>Hello gatsby-image</h1>
                <Img
                    fluid={props.data.attapadiCamp.childImageSharp.fluid}
                    alt='Gatsby Docs are awesome'
                />
            </div>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <h1>Hello gatsby-image</h1>
                <Img
                    style={{ maxHeight: `300px` }}
                    fluid={props.data.sonu.childImageSharp.fluid}
                    alt='Gatsby Docs are awesome'
                />
            </div>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <h1>Hello gatsby-image</h1>

                <Img
                    fluid={props.data.syam.childImageSharp.fluid}
                    alt='Gatsby Docs are awesome'
                />
            </div>
        </div>
    );
};
export const query = graphql`
    query {
        attapadiCamp: file(relativePath: { eq: "h1.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        sonu: file(relativePath: { eq: "sonu.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        syam: file(relativePath: { eq: "syam.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

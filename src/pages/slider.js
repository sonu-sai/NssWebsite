import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default props => {
    console.log(props.data);
    return (
        <div className='mainbodyImage'>
            <div
                id='carouselExampleIndicators'
                className='carousel slide'
                data-ride='carousel'>
                <ol className='carousel-indicators'>
                    <li
                        data-target='#carouselExampleIndicators'
                        data-slide-to='0'
                        className='active'></li>
                    <li
                        data-target='#carouselExampleIndicators'
                        data-slide-to='1'></li>
                    <li
                        data-target='#carouselExampleIndicators'
                        data-slide-to='2'></li>
                </ol>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <Img
                            fluid={
                                props.data.attapadiCamp.childImageSharp.fluid
                            }
                            alt='Gatsby Docs are awesome'
                        />
                    </div>
                    <div className='carousel-item'>
                        <Img
                            fluid={props.data.sonu.childImageSharp.fluid}
                            alt='Gatsby Docs are awesome'
                        />
                    </div>
                    <div className='carousel-item'>
                        <Img
                            fluid={props.data.syam.childImageSharp.fluid}
                            alt='Gatsby Docs are awesome'
                        />
                    </div>
                </div>
                <a
                    className='carousel-control-prev'
                    href='#carouselExampleIndicators'
                    role='button'
                    data-slide='prev'>
                    <span
                        className='carousel-control-prev-icon'
                        aria-hidden='true'></span>
                    <span className='sr-only'>Previous</span>
                </a>
                <a
                    className='carousel-control-next'
                    href='#carouselExampleIndicators'
                    role='button'
                    data-slide='next'>
                    <span
                        className='carousel-control-next-icon'
                        aria-hidden='true'></span>
                    <span className='sr-only'>Next</span>
                </a>
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

import React from 'react';
import SEO from '../components/seo';
import Header from '../components/header';
import Footer from '../components/footer';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Carousel } from 'react-bootstrap';

const IndexPage = props => (
    <div className='mainbody'>
        <SEO title='Home' />
        <Header />
        <div>
            {/* style={{
                maxWidth: `100%`,
                maxHeight: `300px`,
                marginBottom: `1.45rem`,
            }} */}
            <Carousel>
                <Carousel.Item>
                    <div className='sliderImage'>
                        <Img
                            style={{
                                maxWidth: `100%`,
                                //maxHeight: `600px`,
                                marginBottom: `1.45rem`,
                            }}
                            fluid={props.data.slide01.childImageSharp.fluid}
                            alt='firstSlide'
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='sliderImage'>
                        <Img
                            style={{
                                maxWidth: `100%`,
                                //maxHeight: `600px`,
                                marginBottom: `1.45rem`,
                            }}
                            fluid={props.data.slide02.childImageSharp.fluid}
                            alt='secondSlide'
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='sliderImage'>
                        <Img
                            style={{
                                maxWidth: `100%`,
                                //maxHeight: `600px`,
                                marginBottom: `1.45rem`,
                            }}
                            fluid={props.data.slide03.childImageSharp.fluid}
                            alt='thirdSlide'
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
        <div className='container'>
            <h1>WHAT ARE WE ?</h1>
            <p>Quotes</p>
        </div>
        <Footer />
    </div>
);

export default IndexPage;

export const query = graphql`
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
`;

import React from "react";
import { graphql } from "gatsby";
import SEO from "components/SEO";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "styles/pages/naslovna.module.css";
import FilteredPosts from "components/FilteredPosts";
import Img from "gatsby-image";
import Layout from "components/Layout";

export default ({ data: { naslovna, slike4Slider, posts } }) => {
  const carousel = slike4Slider.edges.map((element) => {
    const id = element.node.id;
    const fluidImage = element.node.childImageSharp.fluid;
    return (
      <div key={id} className={styles.Carousel}>
        <Img fluid={fluidImage} />
      </div>
    );
  });

  const sliderConfig = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <header className="withBackground">
        <div id="title-search-container">
          <h1>Accommodation in Split</h1>
          <form id="searchbox" action="" autocomplete="on">
            <input id="search" type="text" placeholder="Search by name..." />
            <button type="submit" class="_v50wlo">
              <svg className="svg-header">
                <path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7" />
              </svg>
            </button>
          </form>
        </div>
      </header>
      <Layout>
        <SEO keywords={[`gatsby`, `application`, `react`]} />
        <div className={styles.ResponsiveSmall}>
          <Slider {...sliderConfig} slidesToShow={1}>
            {carousel}
          </Slider>
        </div>
        <div className={styles.ResponsiveNormal}>
          <Slider {...sliderConfig} slidesToShow={2}>
            {carousel}
          </Slider>
        </div>
        <div
          style={{ marginTop: "2rem" }}
          dangerouslySetInnerHTML={{ __html: naslovna.html }}
        />
        <a href="/smjestaj" className="a-vise-2">
          <button className="vise-button">MORE</button>
        </a>
        <hr />
        <h2>Split</h2>
        <FilteredPosts posts={posts} />
        <a href="/blog" className="a-vise-2">
          <button className="vise-button">MORE</button>
        </a>
        <hr />
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    naslovna: markdownRemark(frontmatter: { page: { eq: "naslovna" } }) {
      html
    }

    slike4Slider: allFile(
      filter: {
        extension: { in: ["jpg", "png"] }
        relativePath: { regex: "/naslovna/index/" }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }

    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      markdowns: edges {
        markdown: node {
          id
          excerpt(pruneLength: 600)
          frontmatter {
            title
            slug
            image {
              childImageSharp {
                fluid(
                  maxWidth: 350
                  maxHeight: 260
                  cropFocus: NORTH
                  traceSVG: { color: "#494949" }
                ) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

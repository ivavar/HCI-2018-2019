import React from "react";
import { graphql } from "gatsby";
import SEO from "components/SEO";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "styles/pages/naslovna.module.css";
import FilteredPosts from "components/FilteredPosts";
import { Form, Text } from "react-form";
//import Calendar from "react-input-calendar";
import Layout from "components/Layout";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import "react-dates/initialize";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "airbnb-js-shims";
import Calendar from "components/Calendar";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Carousel from "nuka-carousel";
import Img from "gatsby-image";
import { Icon } from "semantic-ui-react";
import ApCard from "components/ApCard";
/*import Calendar from "rc-calendar";
import RangeCalendar from "rc-calendar/lib/RangeCalendar";*/

export default ({ data: { naslovna, ap1slike, posts } }) => {
  const carousel = ap1slike.edges.map(element => {
    const id = element.node.id;
    const fluidImage = element.node.childImageSharp.fluid;
    return (
      <div key={id} className={styles.Carousel2}>
        <Img fluid={fluidImage} />
      </div>
    );
  });

  const sliderConfig = {
    dots: false,
    infinite: false,
    speed: 750,
    slidesToScroll: 1,
    autoplay: false
  };

  return (
    <Layout>
      <form id="search-container-2" autoComplete="on">
        <input id="search2" type="text" placeholder="Search by name..." />

        <div className="guests-number">
          <Icon disabled name="users" />
          <i aria-hidden="true" class="users disabled icon" />
          <i class="fa fa-users" aria-hidden="true" />
          Guests:
          <i className="fa fa-users" aria-hidden="true" />
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="1">4</option>
            <option value="2">5</option>
            <option value="3">6</option>
            <option value="1">7</option>
            <option value="2">8</option>
            <option value="3">9</option>
            <option value="1">10</option>
            <option value="2">11</option>
            <option value="3">12</option>
          </select>
        </div>
        <Calendar />
        <button type="submit" class="_v50wlo">
          <svg className="svg-header">
            <path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7" />
          </svg>
        </button>
      </form>
      <h2>Explore homes</h2>
      <div className="ap-container">
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
              <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <a href="/apartment" className="a-vise">
                  <h3>Ivy Apartment</h3>
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
              <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <a href="/apartment" className="a-vise">
                  <h3>Ivy Apartment</h3>
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
              <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <a href="/apartment" className="a-vise">
                  <h3>Ivy Apartment</h3>
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
              <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <a href="/apartment" className="a-vise">
                  <h3>Ivy Apartment</h3>
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
              <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <a href="/apartment" className="a-vise">
                  <h3>Ivy Apartment</h3>
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
              <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <a href="/apartment" className="a-vise">
                  <h3>Ivy Apartment</h3>
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
              <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <a href="/apartment" className="a-vise">
                  <h3>Ivy Apartment</h3>
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
              <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <a href="/apartment" className="a-vise">
                  <h3>Ivy Apartment</h3>
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
              <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <a href="/apartment" className="a-vise">
                  <h3>Ivy Apartment</h3>
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
              <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <a href="/apartment" className="a-vise">
                  <h3>Ivy Apartment</h3>
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
              <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <a href="/apartment" className="a-vise">
                  <h3>Ivy Apartment</h3>
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
              <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <a href="/apartment" className="a-vise">
                  <h3>Ivy Apartment</h3>
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
              <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <a href="/apartment" className="a-vise">
                  <h3>Ivy Apartment</h3>
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
              <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <a href="/apartment" className="a-vise">
                  <h3>Ivy Apartment</h3>
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
              <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <a href="/apartment" className="a-vise">
                  <h3>Ivy Apartment</h3>
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
              <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <a href="/apartment" className="a-vise">
                  <h3>Ivy Apartment</h3>
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
              <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <a href="/apartment" className="a-vise">
                  <h3>Ivy Apartment</h3>
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
              <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <a href="/apartment" className="a-vise">
                  <h3>Ivy Apartment</h3>
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
              <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <a href="/apartment" className="a-vise">
                  <h3>Ivy Apartment</h3>
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card">
          <div className="ap-slider">
            <div slidesToShow={1}>
              <Carousel {...sliderConfig}>{carousel}</Carousel>
              <div className="ap-title">
                <a href="/apartment" className="a-vise">
                  <h3>Ivy Apartment</h3>
                  <button className="vise-button">MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    naslovna: markdownRemark(frontmatter: { page: { eq: "naslovna" } }) {
      html
    }

    ap1slike: allFile(
      filter: {
        extension: { in: ["jpg", "png"] }
        relativePath: { regex: "/naslovna/ap1/" }
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
  }
`;

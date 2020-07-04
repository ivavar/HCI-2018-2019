import React from 'react'
import { graphql } from 'gatsby'
import SEO from 'components/SEO'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from 'styles/pages/naslovna.module.css'
import FilteredPosts from 'components/FilteredPosts'
import { Form, Text } from 'react-form'
//import Calendar from "react-input-calendar";
import Layout from 'components/Layout'
import { render } from 'react-dom'
import Gallery from 'react-photo-gallery'
import 'react-dates/initialize'
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import 'airbnb-js-shims'
import Calendar from 'components/Calendar'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import Carousel from 'nuka-carousel'
import Img from 'gatsby-image'
import { Icon } from 'semantic-ui-react'
/*import Calendar from "rc-calendar";
import RangeCalendar from "rc-calendar/lib/RangeCalendar";*/

export default ({ data: { naslovna, ap1slike, posts } }) => {
  const carousel = ap1slike.edges.map(element => {
    const id = element.node.id
    const fluidImage = element.node.childImageSharp.fluid
    return (
      <div key={id} className={styles.Carousel2}>
        <Img fluid={fluidImage} />
      </div>
    )
  })

  const sliderConfig = {
    dots: false,
    infinite: false,
    speed: 750,
    slidesToScroll: 1,
    autoplay: false
  }

  return (
    <>
      <div className='ap-container'>
        <div className='ap-slider'>
          <div slidesToShow={1}>
            <Carousel {...sliderConfig}>{carousel}</Carousel>
            <a href='/apartment' className='a-vise'>
              Ivy Apartment
              <button className='vise-button'>VIŠE</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query {
    naslovna: markdownRemark(frontmatter: { page: { eq: "naslovna" } }) {
      html
    }

    ap1slike: allFile(
      filter: {
        extension: { in: ["jpg", "png"] }
        relativePath: { regex: "/naslovna/ap/" }
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
`

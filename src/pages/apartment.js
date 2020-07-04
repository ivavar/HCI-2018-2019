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
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import StickyBox from 'react-sticky-box'
import logo from 'styles/images/user.jpeg'
/*import Calendar from "rc-calendar";
import RangeCalendar from "rc-calendar/lib/RangeCalendar";*/

export default ({ data: { naslovna, slike4Slider, posts } }) => {
  const carousel = slike4Slider.edges.map(element => {
    const id = element.node.id
    const fluidImage = element.node.childImageSharp.fluid
    return (
      <div key={id} className={styles.Carousel}>
        <Img fluid={fluidImage} />
      </div>
    )
  })

  const sliderConfig = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToScroll: 1,
    autoplay: true
  }

  const images = [
    {
      original:
        'https://q-cf.bstatic.com/images/hotel/max1024x768/201/201961102.jpg',
      thumbnail:
        'https://q-cf.bstatic.com/images/hotel/max1024x768/201/201961102.jpg'
    },
    {
      original:
        'https://r-cf.bstatic.com/images/hotel/max1024x768/134/134194812.jpg',
      thumbnail:
        'https://r-cf.bstatic.com/images/hotel/max1024x768/134/134194812.jpg'
    },
    {
      original:
        'https://pix10.agoda.net/hotelImages/2169047/-1/ae0dc5d4e4ffe02ce4b86b5cece72739.jpg?s=1024x768',
      thumbnail:
        'https://pix10.agoda.net/hotelImages/2169047/-1/ae0dc5d4e4ffe02ce4b86b5cece72739.jpg?s=1024x768'
    },
    {
      original:
        'https://www.luxurychicagoapartments.com/wp-content/uploads/2017/10/Landmark-30.jpg',
      thumbnail:
        'https://www.luxurychicagoapartments.com/wp-content/uploads/2017/10/Landmark-30.jpg'
    },
    {
      original: 'https://i.ytimg.com/vi/RfYc0BUqkMs/maxresdefault.jpg',
      thumbnail: 'https://i.ytimg.com/vi/RfYc0BUqkMs/maxresdefault.jpg'
    },
    {
      original:
        'https://www.apartmentguide.com/blog/wp-content/uploads/2019/03/cramped_kitchen-min.jpg',
      thumbnail:
        'https://www.apartmentguide.com/blog/wp-content/uploads/2019/03/cramped_kitchen-min.jpg'
    }
  ]

  return (
    <Layout>
      <SEO title='Apartment' />
      <h1>Ivy Apartment</h1>
      <ImageGallery items={images} />
      <h2>Description</h2>
      <article>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </article>
      <hr />
      <h2>Location</h2>
      <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23148.883613903305!2d16.44307937033173!3d43.51046137872087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355e06c2b45ebb%3A0x53a2694b173d9932!2sUl.+Tolstojeva+10%2C+21000%2C+Split!5e0!3m2!1sen!2shr!4v1527197056612' />
      <hr />
      <h2>Reviews</h2>
      <div className='review'>
        <div className='review-post'>
          <div className='name-and-image'>
            <img
              className='user-img'
              src={require('styles/images/profile-3.jpg')}
            />
            <h3 className='h3-username'>Sebastian</h3>
          </div>
          The apartment and hosts were great, and provided helpful
          recommendations for the city as well as a beautiful location to stay.
          Highly recommended!
        </div>
        <div className='review-post'>
          <div className='name-and-image'>
            <img
              className='user-img'
              src={require('styles/images/user.jpeg')}
            />
            <h3 className='h3-username'>Ann</h3>
          </div>
          Fantastic stylish clean modern apartment right in the heart of Split.
          The hosts were extremely helpful and responsive to all of our needs.
          They even helped us find parking and carry our luggage. The view is
          spectacular and you are minutes away from the prime locations of
          Split.
        </div>
      </div>
      <div className='book'>
        <div>
          <h3>Ivy Apartment</h3>
        </div>
        <div className='price-and-book'>
          <span className='span-price'>300kn/night</span>
          <a href='/private' className='a-vise'>
            <button className='book-button'>Book</button>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    naslovna: markdownRemark(frontmatter: { page: { eq: "naslovna" } }) {
      html
    }

    slike4Slider: allFile(
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
                  traceSVG: { color: "#663399" }
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
`

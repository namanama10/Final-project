import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import GambarBanner1 from '../images/banner_2.jpg'
import GambarBanner2 from '../images/1020.jpg'
import GambarBanner3 from '../images/ThanitApril_32.jpg'

const Banner = () => {
  return (
    <>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={GambarBanner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={GambarBanner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={GambarBanner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Banner

{/* <img src={GambarBanner} alt='' className='imgBanner'/> */}
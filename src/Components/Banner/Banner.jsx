import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
  return (
    <div className="wrapper">
      <div className='container'style={{
        height:'auto',
        width:'100%',
        position:'relative',
        border:'#505050 solid 1px',
        margin:'0rem',
        padding:'0.5rem',
        borderRadius:'0.6rem'
      
      }}>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="./assets/images/Steve1.jpeg"
            alt="First slide"
            style={{borderRadius:'0.6rem'}}
          />
          
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="./assets/images/Musk1.jpeg"
            alt="Second slide"
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/images/JackMa.jpeg"
            alt="Third slide"
          />
          
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  );
};

export default Banner;

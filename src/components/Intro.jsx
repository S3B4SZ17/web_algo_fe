import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../img/programming_slide1.jpg';
import slide2 from '../img/programming_slide2.jpg';
import slide3 from '../img/programming_slide3.jpg';

export default function Intro() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (

    <div style={{width: '100%', top: '5em', position: 'relative'}}> 
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img style={{ width: "40hv", height: "100hv" }}
          className="d-block w-100 h-40"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{ width: "40hv", height: "100hv" }}
          className="d-block w-100 h-40"
          src={slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{ width: "40hv", height: "100hv" }}
          className="d-block w-100 h-40"
          src={slide3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}
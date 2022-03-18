import React from 'react'

import { Carousel } from 'react-bootstrap';


export const CarouselMain = () => {
  return (
      
    <Carousel variant="dark" className='carousel' >
      <Carousel.Item  className='itemCsl'>
        <img
          className="d-block w-100"
          // src="https://img.freepik.com/foto-gratis/escritorio-oficina-laptop-cuaderno-blanco-taza-cafe-mesa-madera_149391-169.jpg"
          src="https://images.squarespace-cdn.com/content/v1/57ad8de5ff7c50d12ce76b68/1565337626005-EH2XAN98ODEYSP4A2VJ6/Open-Plan-Office-Layout-Benefits-Hairburst-Leeds.jpg"
          alt="First slide"   
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='itemCsl'>
        <img
          className="d-block w-100"
          src="https://www.freejpg.com.ar/asset/900/55/55a0/F100006585.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='itemCsl'>
        <img
          className="d-block w-100"
          src="https://mxcity.mx/wp-content/uploads/2017/07/Portada-Centro-.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  )
}

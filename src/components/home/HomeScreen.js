import React from 'react'
import { Cards } from './Cards';
import { CarouselMain } from './CarouselMain';

import { NavBar } from './NavBar';
import { Section } from './Section';

export const HomeScreen = () => {
  return (
    <>
      

      <NavBar/>      
      <CarouselMain/>
      <Section/>
      <Cards/>
      
    </>
  )
}

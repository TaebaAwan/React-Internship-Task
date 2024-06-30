import React from 'react';
import HeroSection from '../HeroSection';
import Cards from '../Card';
import Carousel from '../Carousel';
import { SliderData } from '../CarouselData';
import Blog from '../Blog';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Carousel slides={SliderData} />
      <Blog/>
     
    </>
  )
}

export default Home


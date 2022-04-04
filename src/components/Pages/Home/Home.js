import React from 'react'
import { Slider } from './Sliders/Slider';
import NewIn from './NewInSection/NewIn';
import CasualSection from './CasualSection/CasualSection';
import FormalSection from './FormalSection/FormalSection';
import ShawlSection from './ShawlSection/ShawlSection';
import TopSelling from './TopSelling/TopSelling';


const Home = () => {
  return (
    <>
      <Slider />
      <NewIn />
      <CasualSection />
      <FormalSection />
      <ShawlSection />
      <TopSelling />
    </>
  )
}

export default Home
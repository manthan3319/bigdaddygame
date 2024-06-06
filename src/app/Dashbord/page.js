import React from 'react'
import  Navbar  from '../Navbar/page';
import  Category  from '../Category/page';
import  CategoryPopular  from '../CategoryPopular/page';
import  ChildCategory  from '../ChildCategory/page';
import  Slots  from '../Slots/page';
import  WinningInfo  from '../WinningInfo/page';
import  Menubar  from '../Menubar/page';
import SlickSlider from '../slickSlider/page';
import  Lottery  from '../Lottery/page';
const Dashbord = () => {
  return (
    <>
      <Navbar />
      <SlickSlider/>
      <Category/>
      <CategoryPopular/>
      <ChildCategory/>
      <Lottery/>
      <Slots/>
      <WinningInfo/>
      <Menubar/>
      
    </>
  )
}

export default Dashbord; 

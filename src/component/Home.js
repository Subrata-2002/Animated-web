import React from 'react';
import web from "../component/Images/App2.svg";
import Common from './Common';
const Home = () => {
  return (
    <>
       <Common name=' Grow your business with'  
      imgsrc={web} 
      visit="/services" 
      btnname="Get Started"/>
    </>
  );
}

export default Home;
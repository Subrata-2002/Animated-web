import React from 'react';
import web from "../component/Images/img2.svg";
import Common from './Common';

const About = () => {
  return (
    <>
      <Common name='Welcome to About page'  
      imgsrc={web} 
      visit="/contact" 
      btnname="Contact Now"/>
    </>
  );
}

export default About;
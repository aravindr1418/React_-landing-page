import React from 'react';
import './herosection.css';


import heroImage6 from './6.jpg';
import heroImage7 from './7.jpg';
import heroImage8 from './8.jpg';
import heroImage9 from './9.jpg';
import heroImage10 from './10.jpg';
const HeroSection = () => {
  return (
    
    <section className="hero">
       
   
      <img src={heroImage6} alt="Hero" className="hero-image" />
      <img src={heroImage7} alt="Hero" className="hero-image" />
      <img src={heroImage8} alt="Hero" className="hero-image" />
      <img src={heroImage9} alt="Hero" className="hero-image" />
      <img src={heroImage10} alt="Hero" className="hero-image" />
      
      <div className="hero-content">
        <button>Next page</button>
      </div>
      
    </section>
  );
};

export default HeroSection;

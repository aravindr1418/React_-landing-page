import React from 'react';
import './App.css'; // Add this line
import Header from './header';
import HeroSection from './herosection';
import Footer from './footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default App;

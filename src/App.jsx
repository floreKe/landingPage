import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import FooterSection from './components/FooterSection';

const App = () => {
  return (
    <div className='font-sans'>
      <Header />
      <HeroSection />
      <FooterSection />
      <ProductsSection />
    </div>
  );
};

export default App;
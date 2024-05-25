import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';

const App = () => {
  return (
    <div className='font-sans'>
      <Header />
      <HeroSection />
      <ProductsSection />
    </div>
  );
};

export default App;
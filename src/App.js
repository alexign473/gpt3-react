import React from 'react';

import { Header, Footer, Blog, Possibility, Features, WhatGPT3 } from './containers';
import { Cta, Brand, Navbar } from './components';
import './App.scss';

export default function App() {
  return (
    <div className='app'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

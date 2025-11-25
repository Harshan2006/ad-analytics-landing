import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solutions from './components/Solutions';
import Features from './components/Features';
import Audience from './components/Audience';
import Setup from './components/Setup';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Problem />
      <Solutions />
      <Features />
      <Audience />
      <Setup />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
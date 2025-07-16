import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CareSection from './components/CareSection';
import TipsSection from './components/TipsSection';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CareSection />
      <TipsSection />
      <Gallery />
      
      <Footer />
    </div>
  );
}

export default App;
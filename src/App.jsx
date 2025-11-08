import React from 'react';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import InteractiveMenu from './components/InteractiveMenu';
import FooterAroma from './components/FooterAroma';

function App() {
  return (
    <div className="font-sans bg-[#FFF7EA] text-[#3A2A20]">
      {/* Hero with 3D centerpiece and ambient motion */}
      <Hero />

      {/* Products grid with gentle parallax-like entrances and hover motion */}
      <ProductShowcase />

      {/* Interactive sliding menu */}
      <InteractiveMenu />

      {/* Cozy footer with floating aroma */}
      <FooterAroma />
    </div>
  );
}

export default App;

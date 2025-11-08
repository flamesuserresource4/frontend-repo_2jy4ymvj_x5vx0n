import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = {
  Cakes: [
    { name: 'Opéra', price: '$32' },
    { name: 'Mille-Feuille', price: '$29' },
    { name: 'Tarte aux Fraises', price: '$26' },
  ],
  Pastries: [
    { name: 'Croissant', price: '$5' },
    { name: 'Pain au Chocolat', price: '$6' },
    { name: 'Kouign-amann', price: '$7' },
  ],
  Bread: [
    { name: 'Baguette Tradition', price: '$4' },
    { name: 'Sourdough Boule', price: '$8' },
    { name: 'Brioche Loaf', price: '$9' },
  ],
};

export default function InteractiveMenu() {
  const tabs = Object.keys(categories);
  const [active, setActive] = useState(tabs[0]);

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#3A2A20] text-center mb-8">Menu</h2>

        <div className="mx-auto w-full md:w-max bg-[#FFF7EA] rounded-full p-1 border border-[#F5E6D3] shadow-sm">
          <div className="grid grid-cols-3 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`relative px-5 py-2.5 rounded-full text-sm md:text-base transition ${
                  active === tab ? 'text-[#3A2A20]' : 'text-[#5a4637]/70'
                }`}
              >
                {active === tab && (
                  <motion.span
                    layoutId="pill"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-3xl border border-[#F5E6D3] bg-gradient-to-b from-[#FFF7EA] to-white">
          <AnimatePresence mode="wait">
            <motion.ul
              key={active}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6"
            >
              {categories[active].map((item) => (
                <li key={item.name} className="flex items-center justify-between rounded-2xl bg-white/70 backdrop-blur border border-white/80 px-4 py-3 shadow-sm">
                  <span className="text-[#3A2A20] font-medium">{item.name}</span>
                  <span className="text-[#5a4637]/80">{item.price}</span>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

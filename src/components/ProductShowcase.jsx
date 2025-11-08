import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Parisian Strawberry Cake',
    desc: 'Vanilla chiffon, strawberry confit, chantilly cream',
    price: '$28',
    color: 'from-[#FDE2E4] to-[#FFF7EA]'
  },
  {
    name: 'Butter-Laminated Croissant',
    desc: '24h fermented dough, Isigny butter, flaky layers',
    price: '$5',
    color: 'from-[#F5E6D3] to-[#FFF7EA]'
  },
  {
    name: 'Dark Chocolate Éclair',
    desc: 'Pâte à choux, cacao nibs, Madagascar vanilla cream',
    price: '$7',
    color: 'from-[#FDE2E4] to-[#F5E6D3]'
  },
  {
    name: 'Caramel Brioche',
    desc: 'Feather-soft crumb, caramel glaze, sea salt',
    price: '$6',
    color: 'from-[#FFF7EA] to-[#F5E6D3]'
  }
];

export default function ProductShowcase() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#FFF7EA] to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#3A2A20]">Boulangerie Signatures</h2>
            <p className="text-[#5a4637]/80 mt-2">Our most-loved creations — crafted fresh every morning.</p>
          </div>
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="hidden md:inline-flex px-4 py-2 rounded-full bg-[#E7B089] text-white shadow">
            View All
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative rounded-3xl p-5 bg-gradient-to-br ${p.color} border border-white/60 backdrop-blur shadow-sm hover:shadow-lg overflow-hidden`}
            >
              {/* Fake 3D pastry using layered circles */}
              <div className="relative h-36 mb-4">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-24 h-24 rounded-full bg-white/70 shadow-inner" />
                  <div className="absolute w-16 h-16 rounded-full bg-[#E7B089]/70 blur-sm" />
                  <div className="absolute w-20 h-20 rounded-full border-2 border-white/70" />
                </motion.div>
              </div>

              <h3 className="text-lg font-semibold text-[#3A2A20] leading-tight">{p.name}</h3>
              <p className="text-sm text-[#5a4637]/80 mt-1">{p.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[#3A2A20] font-medium">{p.price}</span>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-3 py-1.5 rounded-full text-sm bg-white/70 backdrop-blur border border-white/80"
                >
                  Add
                </motion.button>
              </div>

              {/* Glow on hover */}
              <div className="pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: 'radial-gradient(60% 60% at 50% 0%, rgba(231,176,137,0.25) 0%, rgba(231,176,137,0) 60%)'
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

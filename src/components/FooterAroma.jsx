import React from 'react';
import { motion } from 'framer-motion';

export default function FooterAroma() {
  return (
    <footer className="relative bg-[#FFF7EA] pt-16 pb-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div>
            <h3 className="text-xl font-semibold text-[#3A2A20]">Maison Beurre</h3>
            <p className="mt-2 text-[#5a4637]/80">Open daily 7am — 6pm · 123 Rue de Pastel, Paris</p>
          </div>
          <div className="md:text-center">
            <nav className="flex gap-4 justify-start md:justify-center text-[#5a4637]/80">
              <a href="#" className="hover:text-[#3A2A20]">About</a>
              <a href="#" className="hover:text-[#3A2A20]">Menu</a>
              <a href="#" className="hover:text-[#3A2A20]">Order</a>
              <a href="#" className="hover:text-[#3A2A20]">Contact</a>
            </nav>
          </div>
          <div className="md:text-right text-[#5a4637]/80">© {new Date().getFullYear()} Maison Beurre</div>
        </div>
      </div>

      {/* Floating steam/aroma */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-28 w-28 opacity-80">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white/50 blur-2xl"
            initial={{ y: 0, opacity: 0.5, scale: 0.8 }}
            animate={{ y: -80 - i * 10, opacity: [0.5, 0.8, 0], scale: [0.8, 1, 1.1] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeOut', delay: i * 1.5 }}
          />
        ))}
      </div>
    </footer>
  );
}

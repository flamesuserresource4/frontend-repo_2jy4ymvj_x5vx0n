import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -40]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.85]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.98]);

  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center justify-center bg-[#FFF7EA]">
      {/* Soft pastel ambient background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,#FDE2E4_0%,transparent_35%),radial-gradient(circle_at_80%_20%,#F5E6D3_0%,transparent_40%),radial-gradient(circle_at_50%_100%,#FFF7EA_0%,transparent_45%)]" />

      {/* 3D Spline Scene container - avoid backdrop filters to prevent GPU flicker */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative will-change-transform isolate w-[92%] md:w-[88%] lg:w-[80%] h-[60vh] md:h-[70vh] lg:h-[75vh] max-w-6xl rounded-[28px] shadow-xl overflow-hidden border border-white/40 bg-white/10"
      >
        <Spline scene="https://prod.spline.design/7Y3b4sJ0w7oJrL7h/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* subtle gradient overlay that won't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/40" />
      </motion.div>

      {/* Floating ingredients for ambient motion */}
      <FloatingIngredients />

      {/* Headline and CTA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="absolute bottom-7 md:bottom-10 w-full px-6"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-semibold tracking-tight text-4xl md:text-6xl text-[#3A2A20]">
            Artisanal Bakes, Crafted with Love
          </h1>
          <p className="mt-3 md:mt-4 text-[#5a4637]/90 text-base md:text-lg">
            A modern French bakery experience — buttery layers, delicate creams, and flavors that melt in your mouth.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <BouncyButton label="Explore Menu" variant="primary" />
            <BouncyButton label="Order Now" variant="ghost" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function FloatingIngredients() {
  const items = [
    { id: 1, icon: '🥐', x: '8%', y: '15%', delay: 0 },
    { id: 2, icon: '🍓', x: '86%', y: '18%', delay: 0.6 },
    { id: 3, icon: '🍫', x: '15%', y: '70%', delay: 1.2 },
    { id: 4, icon: '🫐', x: '75%', y: '65%', delay: 1.8 },
    { id: 5, icon: '✨', x: '50%', y: '10%', delay: 0.8 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0">
      {items.map((item) => (
        <motion.span
          key={item.id}
          initial={{ y: 0, opacity: 0.9 }}
          animate={{ y: [0, -12, 0], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
          style={{ left: item.x, top: item.y }}
          className="absolute text-2xl md:text-3xl select-none"
        >
          {item.icon}
        </motion.span>
      ))}

      {Array.from({ length: 10 }).map((_, i) => (
        <motion.span
          key={`dust-${i}`}
          className="absolute w-1 h-1 rounded-full bg-white/60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(1px)',
          }}
          animate={{ y: [0, -8, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5 + Math.random() * 4, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

function BouncyButton({ label, variant = 'primary' }) {
  const base = 'relative px-6 py-3 rounded-full text-base md:text-lg font-medium transition will-change-transform';
  const styles =
    variant === 'primary'
      ? 'bg-[#E7B089] text-white shadow-lg shadow-[#E7B089]/30 hover:shadow-[#E7B089]/50 hover:bg-[#d79d73]'
      : 'bg-white/80 text-[#3A2A20] border border-white/70 hover:bg-white';

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${styles}`}
    >
      <span className="relative z-10">{label}</span>
      <span className="pointer-events-none absolute inset-0 rounded-full bg-white/20 blur-md" />
    </motion.button>
  );
}

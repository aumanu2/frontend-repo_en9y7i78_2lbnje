import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const particles = Array.from({ length: 16 });

const Hero = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center" aria-label="Hero">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient tint overlay to match blush→beige theme */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose-100/70 via-rose-50/60 to-amber-50/70" />

      {/* Floating soft golden particles */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full"
            style={{
              left: `${(i * 59) % 100}%`,
              top: `${(i * 37) % 100}%`,
              background: 'radial-gradient(circle at center, rgba(234,179,8,0.9), rgba(234,179,8,0.15))',
              boxShadow: '0 0 12px rgba(234,179,8,0.75)'
            }}
            initial={{ opacity: 0.0, y: 0 }}
            animate={{ opacity: [0.15, 0.6, 0.15], y: [0, -8, 0] }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-rose-900 drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
        >
          From crafting visuals that catch the eye to designing experiences that touch the heart.
        </motion.h1>
        <motion.p
          className="mt-6 text-base sm:text-lg md:text-xl text-rose-800/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 0.2 }}
        >
          Hi, I’m Pragya — a Graphic & UI/UX Designer who blends art, empathy, and emotion to create meaningful design.
        </motion.p>

        <motion.div
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 0.35 }}
        >
          <button
            onClick={() => handleScrollTo('projects')}
            className="relative rounded-full px-6 py-3 text-sm md:text-base font-medium text-rose-900 bg-amber-100/80 shadow hover:shadow-lg transition shadow-amber-200/50 hover:bg-amber-100"
          >
            <span className="relative z-10">View My Work</span>
            <span className="pointer-events-none absolute inset-0 rounded-full bg-amber-200/40 blur-md" />
          </button>
          <button
            onClick={() => handleScrollTo('about')}
            className="relative rounded-full px-6 py-3 text-sm md:text-base font-medium text-rose-900 bg-white/70 backdrop-blur hover:bg-white/80 border border-rose-200/60 transition"
          >
            <span className="relative z-10">My Story</span>
            <span className="pointer-events-none absolute inset-0 rounded-full bg-rose-100/30 blur" />
          </button>
        </motion.div>
      </div>

      {/* Soft vignette edges */}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-rose-200/30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/40" />
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section id="about" className="relative py-28 bg-gradient-to-b from-amber-50 via-rose-50 to-white overflow-hidden">
      {/* sparkles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-px w-px bg-amber-300/50 shadow-[0_0_8px_rgba(234,179,8,0.5)] rounded-full"
            style={{ left: `${(i * 41) % 100}%`, top: `${(i * 23) % 100}%` }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-serif text-rose-900"
        >
          “I design for the eyes, but I create for the heart.”
        </motion.blockquote>
        <motion.p
          className="mt-6 text-rose-800/90 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Guided by empathy, subtlety, and intention — every pixel, line, and motion tells a story. I bring feminine energy into modern design systems for experiences that feel gentle yet powerful.
        </motion.p>

        {/* minimal animated line art frame */}
        <div className="mt-12 relative mx-auto max-w-2xl">
          <motion.div
            className="rounded-[2rem] border border-rose-200/60 p-8 bg-white/60 backdrop-blur-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-rose-900/90">
              I love exploring the space where art meets usability — from brand identities to product interfaces. If you want design that feels human and intentional, let’s create together.
            </p>
          </motion.div>
          <motion.span
            className="absolute -top-3 -left-3 h-6 w-6 rounded-full bg-amber-300/70"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.span
            className="absolute -bottom-3 -right-3 h-6 w-6 rounded-full bg-rose-300/70"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ArtMeetsPurpose = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const morph = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-5xl text-rose-900 text-center">When Art Met Purpose</h2>
        <p className="mt-4 text-rose-800/90 text-center max-w-3xl mx-auto">
          Soon I realized design isn’t only visual — it’s about meaning, connection, and how people feel. That’s where UI/UX became my world.
        </p>

        {/* Split screen */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative overflow-hidden rounded-2xl border border-rose-100 bg-rose-50">
            <motion.img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop"
              alt="Graphic poster"
              className="w-full h-80 object-cover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-amber-300 via-rose-300 to-amber-300 shadow" />
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-amber-100 bg-amber-50">
            <motion.img
              src="https://images.unsplash.com/photo-1608111282481-c0d45c9c4b3a?q=80&w=1600&auto=format&fit=crop"
              alt="App UI mock"
              className="w-full h-80 object-cover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            />
          </div>
        </div>

        {/* Morphing divider */}
        <div className="mt-8 flex justify-center">
          <motion.div
            style={{ scaleX: morph }}
            className="origin-left h-[2px] w-64 bg-gradient-to-r from-rose-300 via-amber-300 to-rose-300 shadow-[0_0_12px_rgba(234,179,8,0.3)]"
          />
        </div>
      </div>
    </section>
  );
};

export default ArtMeetsPurpose;

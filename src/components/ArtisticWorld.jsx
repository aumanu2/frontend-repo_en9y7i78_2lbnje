import React from 'react';
import { motion } from 'framer-motion';

const work = [
  { title: 'Poster Narrative', img: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Logo Essence', img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Brand Identity', img: 'https://images.unsplash.com/photo-1504199367641-aba8151af406?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Packaging Love', img: 'https://images.unsplash.com/photo-1514727241505-1646a3c3b17e?q=80&w=1600&auto=format&fit=crop' },
];

const ArtisticWorld = () => {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-br from-rose-50 to-amber-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* subtle brush stroke shapes */}
        <div className="absolute -top-10 -left-10 h-40 w-72 rotate-6 bg-rose-200/30 blur-2xl rounded-full" />
        <div className="absolute top-20 -right-10 h-40 w-72 -rotate-6 bg-amber-200/30 blur-2xl rounded-full" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-5xl text-rose-900 text-center">My Artistic World</h2>
        <p className="mt-4 text-rose-800/90 text-center max-w-2xl mx-auto">
          My creative story began with colors, balance, and textures — designing posters, brand identities, and visual stories that spoke without words.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {work.map((item, idx) => (
            <motion.div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-rose-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
            >
              <div className="relative h-56">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.05 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                {/* brush stroke reveal */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-rose-100 to-transparent"
                  initial={{ x: 0 }}
                  whileInView={{ x: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-rose-900 font-medium">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtisticWorld;

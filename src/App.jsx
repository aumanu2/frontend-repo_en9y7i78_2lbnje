import React from 'react';
import Hero from './components/Hero';
import ArtisticWorld from './components/ArtisticWorld';
import ArtMeetsPurpose from './components/ArtMeetsPurpose';
import Philosophy from './components/Philosophy';

function App() {
  return (
    <div className="font-sans text-rose-900 bg-white">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-rose-300 to-amber-200 shadow" />
            <span className="font-serif text-xl">Pragya Dhankar</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-rose-600">Work</button>
            <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-rose-600">Story</button>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <ArtisticWorld />
        <ArtMeetsPurpose />
        <Philosophy />
      </main>

      <footer className="py-10 text-center text-rose-800/70 bg-rose-50 border-t border-rose-100">
        <p>
          © {new Date().getFullYear()} Pragya Dhankar — From Art to Experience
        </p>
      </footer>
    </div>
  );
}

export default App;

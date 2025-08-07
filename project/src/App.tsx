import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Biography } from './components/Biography';
import { Statistics } from './components/Statistics';
import { Timeline } from './components/Timeline';
import { Gallery } from './components/Gallery';
import { NewsUpdates } from './components/NewsUpdates';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Biography />
        <Statistics />
        <Timeline />
        <Gallery />
        <NewsUpdates />
      </main>
      <Footer />
    </div>
  );
}

export default App;
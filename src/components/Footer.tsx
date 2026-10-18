import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-navy py-12 px-5 border-t border-brand-steel/20 text-brand-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="font-plaak font-bold text-3xl uppercase tracking-tighter">Hayase 2072</h2>
          <p className="font-basetica text-xs text-brand-white/50 mt-1 uppercase tracking-wider">Candidate for the Senate to represent Reno</p>
        </div>
        <div className="flex flex-wrap items-center gap-6 font-basetica text-xs text-brand-white/70">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <Link to="/about" className="hover:text-brand-gold transition-colors">About</Link>
          <Link to="/policies" className="hover:text-brand-gold transition-colors">Policies</Link>
          <Link to="/events" className="hover:text-brand-gold transition-colors">Events</Link>
        </div>
        <div className="font-basetica text-xs text-brand-white/60 text-center md:text-right">
          © 2072 Hayase for Reno Campaign. Paid by Tadashi Hayase himself.
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedHighlight from '../components/AnimatedHighlight';
import senateImage from '../assets/senate-governance.jpg';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate overflow-x-clip min-h-[800px] flex items-center justify-center pt-24 px-5">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_45%_at_18%_25%,rgba(203,213,225,1)_0%,rgba(203,213,225,0.68)_30%,transparent_80%),radial-gradient(ellipse_55%_50%_at_82%_75%,rgba(100,116,139,0.2)_0%,rgba(100,116,139,0.1)_30%,transparent_80%)] opacity-80" />
        
        <div className="z-30 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative">
          <div className="md:w-3/5 text-left z-30 pt-12 md:pt-0">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-plaak font-black uppercase text-brand-navy leading-[0.85] tracking-[-0.03em] drop-shadow-lg"
            >
              <span className="block text-[12vw] md:text-[100px] lg:text-[130px]">PROSPERITY</span>
              <span className="block text-[12vw] md:text-[100px] lg:text-[130px] mt-2 relative inline-block">
                <AnimatedHighlight delay={0.6}>FOR RENO</AnimatedHighlight>
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 text-xl font-basetica text-brand-steel max-w-lg"
            >
              Candidate for the Senate to represent Reno. Bringing balanced leadership, sensible economic growth, and a commitment to preserving Reno's high quality of life.
            </motion.p>
          </div>

          <div className="md:w-2/5 flex justify-center md:justify-end md:pr-10 lg:pr-16 mt-16 md:mt-0 relative">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-[300px] md:w-[420px] relative z-20 pointer-events-none"
            >
              <img 
                src="https://www.otempo.com.br/content/dam/otempo/editorias/super-noticia/famosos/2026/9/quem-e-takato-ishida-o-governador-conservador-mais-jovem-do-japao-que-viralizou-nas-redes.webp" 
                alt="Tadashi Hayase" 
                className="w-full h-auto drop-shadow-2xl rounded-t-full object-cover aspect-[3/4]"
                style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 15%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Action Cards */}
      <section className="relative z-40 -mt-24 max-w-7xl mx-auto px-5 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-4 bg-brand-white/80 backdrop-blur-md rounded-2xl border border-brand-navy/10 overflow-hidden shadow-xl text-brand-navy">
          {[
            { title: "Balanced Economy", desc: "Sensible policies that promote local business and consumer growth.", link: "/policies#balanced-economy" },
            { title: "Suburban Excellence", desc: "Investing in our neighborhoods, parks, and local infrastructure.", link: "/policies#suburban-excellence" },
            { title: "Merit-Based Growth", desc: "Rewarding skill and contribution to build a stronger community.", link: "/policies#merit-growth" },
            { title: "Strong Integration", desc: "Strengthening our regional ties for mutual prosperity.", link: "/policies#regional-ties" }
          ].map((card, idx) => (
             <div key={idx} className="group flex flex-col p-8 min-h-[220px] transition-all duration-300 border-b md:border-b-0 md:border-r border-brand-navy/10 last:border-0 hover:bg-brand-navy/5">
              <h3 className="font-plaak font-bold text-3xl lowercase tracking-tight mb-3">{card.title}</h3>
              <p className="font-basetica text-sm text-brand-navy/70 flex-1">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Parallax Reno Context: Community */}
      <section id="vision" className="relative h-[800px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=2000&q=80" 
            alt="A vibrant community" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-brand-navy/70" />
        </div>
        <div className="relative z-10 max-w-4xl px-5 text-center text-brand-white">
          <p className="font-basetica font-bold tracking-widest uppercase text-xs mb-4 text-brand-gold">Our Shared Future</p>
          <h2 className="font-plaak font-bold text-5xl md:text-7xl lowercase mb-6">A Thriving Community</h2>
          <p className="font-basetica text-lg md:text-xl text-brand-white/90">
            Reno is a vibrant and growing community built on the shared values and hard work of its residents. Tadashi Hayase is committed to preserving our high quality of life, fostering sensible economic development, and ensuring our neighborhoods remain safe, prosperous, and welcoming for everyone who contributes to our district.
          </p>
        </div>
      </section>

      {/* Senate Representation & Governance Section */}
      <section className="py-24 bg-brand-navy text-brand-white px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src={senateImage} 
              alt="Senate legislative chamber" 
              className="rounded-3xl shadow-2xl object-cover h-[500px] w-full border border-brand-steel/30"
            />
          </div>
          <div>
            <p className="font-basetica font-bold tracking-widest uppercase text-xs mb-4 text-brand-gold">Senate Representation</p>
            <h2 className="font-plaak font-bold text-5xl lowercase mb-6">Principled leadership in the senate</h2>
            <p className="font-basetica text-lg text-brand-white/80 mb-8 leading-relaxed">
              Reno deserves a serious, independent voice in the Senate, committed to sound economic principles, institutional integrity, and balanced growth. Tadashi Hayase brings an ordoliberal vision that protects our suburban quality of life, reins in reckless policy, and ensures Reno's community is powerfully and thoughtfully represented at the national level.
            </p>
            <Link to="/policies" className="inline-block bg-brand-gold text-brand-navy px-8 py-4 rounded-full font-basetica font-bold hover:brightness-110 transition-colors">
              Explore Our Platform
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

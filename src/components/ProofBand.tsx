import React from 'react';
import { motion } from 'framer-motion';

// Hard, unfakeable proof, shown right under the hero to back the thesis fast.
const PROOFS = [
  { pre: 'Promoted ', accent: '2×', post: '', desc: 'in under two years at Plum, Community Builder → AGM, Partnerships.' },
  { pre: '', accent: '20×', post: ' YoY', desc: "built ClearTax's BFSI channel from zero, 54 partnerships, ₹7M." },
  { pre: 'Sole ', accent: 'owner', post: '', desc: 'of marketing for Grid Dynamics India, client, talent, and brand.' },
  { pre: 'Shipped ', accent: 'solo', post: '', desc: 'an AI workflow platform, in production, engineered end to end.' },
];

const ProofBand: React.FC = () => {
  return (
    <div className="px-6 md:px-12 max-w-7xl mx-auto -mt-8 md:-mt-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl md:rounded-[28px] bg-[#0A192F] text-white p-8 md:p-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-4 shadow-2xl"
      >
        {PROOFS.map((p, i) => (
          <div
            key={i}
            className={`xl:px-6 ${i > 0 ? 'xl:border-l xl:border-white/10' : 'xl:pl-0'}`}
          >
            <div className="text-4xl md:text-[2.6rem] font-display font-black italic tracking-tight leading-none">
              {p.pre}
              <span className="text-[#FF6B35]">{p.accent}</span>
              {p.post}
            </div>
            <p className="mt-3 text-sm text-slate-300 font-light leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProofBand;

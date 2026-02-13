import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const logos = [
  'AI Excellence', 'Code India', 'FinLit India', 'EduTech Awards', 
  'Student Hub', 'Olympiad India', 'Skill Nation', 'Learn & Grow',
];

export default function Marquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-12 overflow-hidden border-y border-white/5" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-slate-600 text-xs uppercase tracking-widest mb-6 font-semibold">
          Trusted by leading educational platforms
        </p>
        <div className="relative overflow-hidden">
          <div className="animate-marquee flex items-center gap-16 whitespace-nowrap" style={{ width: 'max-content' }}>
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={i}
                className="text-slate-500/40 font-orbitron text-xl font-bold px-8 hover:text-slate-400 transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

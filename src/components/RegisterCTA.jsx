import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { FaRocket, FaStar, FaGift } from 'react-icons/fa';

export default function RegisterCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="register" className="relative py-24 overflow-hidden">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-[#0f0a1e] to-cyan-900/40" />
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Glow spots */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-600/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />

          <div className="relative z-10 py-16 px-6 md:px-16 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-5 py-2 text-amber-400 text-sm font-semibold">
                <FaGift /> Early Bird Offer — Limited Seats!
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Ready to Prove
              <br />
              <span className="gradient-text font-orbitron">Your Potential?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-slate-400 text-lg max-w-2xl mx-auto mb-10"
            >
              Join thousands of ambitious students across India. Register now and get instant access to 
              free study materials, mock tests, and more.
            </motion.p>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex justify-center items-end gap-2 mb-8"
            >
              <span className="text-slate-500 line-through text-xl">₹499</span>
              <span className="font-orbitron text-5xl text-white font-bold">₹199</span>
              <span className="text-slate-400 text-sm">/per subject</span>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-10"
            >
              {['Free Study Material', 'Certificate for All', 'Medals for Toppers', 'Detailed Score Card'].map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-sm text-slate-300 bg-white/5 rounded-full px-4 py-2">
                  <FaStar className="text-amber-400 text-xs" /> {item}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                href="#"
                className="btn-glow flex items-center gap-2 text-lg !px-10 !py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket /> Register Now
              </motion.a>
              <motion.a
                href="#materials"
                className="btn-outline-glow flex items-center gap-2 text-lg !px-10 !py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Free Material
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

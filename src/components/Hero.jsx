import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { FaArrowRight, FaAward } from 'react-icons/fa';

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, #8b5cf6 1px, transparent 1px),
          linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <AnimatedGrid />
      
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <Container className="relative z-10">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-badge"
          >
            <FaAward /> 2026 Registration Open
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-tagline"
          >
            {"COMPETE . LEARN . GROW".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.03 }}
                style={{ display: 'inline-block' }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hero-title"
          >
            <div style={{ whiteSpace: 'nowrap' }}>NATIONAL STUDENTS'</div>
            <span className="hero-title-highlight" style={{ display: 'block' }}>OLYMPIAD</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subtitle"
          >
            (Academic Excellence Assessment Program)
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-description"
          >
            Join 50,000+ students mastering AI, Coding & Financial Literacy
            <br />across 28 states in India's premier academic competition.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-cta"
          >
            <motion.a
              href="#register"
              className="hero-btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now <FaArrowRight />
            </motion.a>
            <motion.a
              href="#about"
              className="hero-btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

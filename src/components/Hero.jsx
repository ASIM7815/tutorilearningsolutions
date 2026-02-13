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
            <FaAward /> 2026 Registration Open Soon
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-title"
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
              fontWeight: '900',
              lineHeight: '1.1',
              marginBottom: '2rem'
            }}
          >
            <span style={{ 
              background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'block'
            }}>
              National AI, Coding & Financial Literacy
            </span>
            <span style={{ 
              color: '#fbbf24',
              display: 'block',
              marginTop: '1rem',
              fontSize: '1.2em'
            }}>
              Olympiad 2026
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: '#e0e7ff',
              lineHeight: '1.8',
              maxWidth: '900px',
              margin: '0 auto 2rem',
              fontWeight: '400'
            }}
          >
            A fun and interactive national online competition for students aged <span style={{ color: '#fbbf24', fontWeight: '600' }}>10 to 18</span>. 
            Learn Artificial Intelligence, coding, and money management in a simple and enjoyable way.
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

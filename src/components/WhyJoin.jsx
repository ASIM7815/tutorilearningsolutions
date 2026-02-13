import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { FaLaptopCode, FaCoins, FaBrain, FaTrophy } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaLaptopCode />,
    title: 'Learn AI and Coding',
    description: 'Master Artificial Intelligence and coding concepts in an easy, fun, and interactive way.',
    color: '#60a5fa',
  },
  {
    icon: <FaCoins />,
    title: 'Financial Literacy',
    description: 'Understand how to save, spend, and manage money wisely for a secure future.',
    color: '#a78bfa',
  },
  {
    icon: <FaBrain />,
    title: 'Boost Creativity',
    description: 'Improve critical thinking, problem-solving, and creativity through engaging challenges.',
    color: '#ec4899',
  },
  {
    icon: <FaTrophy />,
    title: 'Win Recognition',
    description: 'Earn certificates, prizes, and national recognition for your achievements.',
    color: '#fbbf24',
  },
];

export default function WhyJoin() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      
      <Container className="relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 
            className="font-black mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}
          >
            <span style={{ color: '#ffffff' }}>Why Should You </span>
            <span 
              style={{
                background: 'linear-gradient(135deg, #a78bfa 0%, #ec4899 50%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Join?
            </span>
          </h2>
          
          <p 
            className="mx-auto"
            style={{
              color: '#cbd5e1',
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              maxWidth: '700px',
              lineHeight: '1.7',
              fontWeight: '400'
            }}
          >
            Discover the amazing opportunities waiting for you in this national competition.
          </p>
        </motion.div>

        <div className="row g-5 justify-content-center">
          {benefits.map((benefit, i) => (
            <div key={i} className="col-md-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="h-100"
              >
                <div 
                  className="p-8 rounded-3xl h-100 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(59, 130, 246, 0.04) 100%)',
                    border: '1px solid rgba(139, 92, 246, 0.25)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <motion.div 
                    className="mb-6"
                    style={{ 
                      color: benefit.color,
                      fontSize: '3.5rem'
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  
                  <h3 
                    className="mb-4"
                    style={{
                      color: '#ffffff',
                      fontSize: 'clamp(1.35rem, 2vw, 1.6rem)',
                      fontWeight: '800',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.3'
                    }}
                  >
                    {benefit.title}
                  </h3>
                  
                  <p 
                    style={{
                      color: '#94a3b8',
                      fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
                      lineHeight: '1.75',
                      fontWeight: '400'
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

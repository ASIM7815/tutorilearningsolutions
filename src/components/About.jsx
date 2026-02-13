import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { FaShieldAlt, FaGlobeAsia, FaChartLine, FaUserGraduate, FaLaptopCode, FaCertificate } from 'react-icons/fa';

const features = [
  {
    icon: <FaGlobeAsia />,
    title: 'Pan-India Reach',
    description: 'Students from all 28 states participate, making it a truly national-level competition.',
    color: '#8b5cf6',
  },
  {
    icon: <FaLaptopCode />,
    title: '100% Online Exams',
    description: 'Take exams from the comfort of your home with our secure, AI-proctored platform.',
    color: '#06b6d4',
  },
  {
    icon: <FaCertificate />,
    title: 'Certified Recognition',
    description: 'Earn nationally recognized certificates and medals for top performers.',
    color: '#f59e0b',
  },
  {
    icon: <FaChartLine />,
    title: 'Detailed Analytics',
    description: 'Get comprehensive performance reports with skill-wise breakdown.',
    color: '#10b981',
  },
  {
    icon: <FaUserGraduate />,
    title: 'Expert-Curated Content',
    description: 'Study materials designed by industry professionals and top educators.',
    color: '#ec4899',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Secure & Fair',
    description: 'AI-powered proctoring ensures a level playing field for every participant.',
    color: '#6366f1',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="about-section" style={{ display: 'none' }}>
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="about-header"
        >
          <span className="about-badge">✨ Why Choose Us</span>
          <h2 className="about-title">
            Why <span className="about-title-gradient">tutor.i</span>?
          </h2>
          <p className="about-subtitle">
            India's premier student olympiad offering a unique blend of competitive excellence and future-ready skill development.
          </p>
        </motion.div>

        <div className="row g-4">
          {features.map((feature, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="about-card"
                style={{ '--feature-color': feature.color }}
              >
                <div className="about-icon" style={{ color: feature.color }}>
                  {feature.icon}
                </div>
                <h3 className="about-card-title">{feature.title}</h3>
                <p className="about-card-description">{feature.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

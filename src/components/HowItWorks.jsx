import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { FaUserPlus, FaDownload, FaCreditCard, FaLaptop } from 'react-icons/fa';

const steps = [
  {
    number: '01',
    icon: <FaUserPlus />,
    title: 'Register Online',
    description: 'Create your account with basic details. It takes less than 2 minutes.',
    color: '#8b5cf6',
  },
  {
    number: '02',
    icon: <FaDownload />,
    title: 'Download Study Material',
    description: 'Access free and premium study resources curated by top educators.',
    color: '#06b6d4',
  },
  {
    number: '03',
    icon: <FaCreditCard />,
    title: 'Pay & Confirm',
    description: 'Complete your payment securely. Affordable fees starting at just ₹199.',
    color: '#f59e0b',
  },
  {
    number: '04',
    icon: <FaLaptop />,
    title: 'Take the Exam',
    description: 'On the scheduled date, log in and take the exam from anywhere.',
    color: '#10b981',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="howitworks-section">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="howitworks-header"
        >
          <span className="howitworks-badge">🚀 How It Works</span>
          <h2 className="howitworks-title">
            Your Journey in <span className="howitworks-title-gradient">4 Simple Steps</span>
          </h2>
          <p className="howitworks-subtitle">
            From registration to recognition — everything is streamlined and easy.
          </p>
        </motion.div>

        <div className="row g-4">
          {steps.map((step, i) => (
            <div key={i} className="col-md-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="howitworks-card"
                style={{ '--step-color': step.color }}
              >
                <div className="howitworks-number">{step.number}</div>
                <div className="howitworks-icon" style={{ color: step.color }}>
                  {step.icon}
                </div>
                <h3 className="howitworks-card-title">{step.title}</h3>
                <p className="howitworks-card-description">{step.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

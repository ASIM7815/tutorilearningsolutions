import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { FaUsers, FaMapMarkerAlt, FaTrophy, FaBookOpen } from 'react-icons/fa';

const stats = [
  { icon: <FaUsers />, target: 50000, suffix: '+', label: 'Students Registered', color: 'text-purple-400' },
  { icon: <FaMapMarkerAlt />, target: 28, suffix: '', label: 'States Covered', color: 'text-cyan-400' },
  { icon: <FaTrophy />, target: 500, suffix: '+', label: 'Awards Given', color: 'text-amber-400' },
  { icon: <FaBookOpen />, target: 3, suffix: '', label: 'Exam Subjects', color: 'text-emerald-400' },
];

function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = target;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="relative py-20 overflow-hidden" style={{ display: 'none' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10" />

      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card py-12 px-6 md:px-12"
        >
          <div className="row g-4 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="col-6 col-lg-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <div className={`text-3xl mb-3 ${stat.color}`}>{stat.icon}</div>
                  <div className={`stat-number ${stat.color} mb-2`}>
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} inView={isInView} />
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { FaDownload, FaFilePdf, FaVideo, FaBook, FaLock } from 'react-icons/fa';

const materials = [
  {
    icon: <FaFilePdf />,
    title: 'AI Study Guide',
    format: 'PDF',
    pages: '120 Pages',
    description: 'Comprehensive guide covering all AI topics from basics to advanced concepts.',
    color: '#8b5cf6',
    free: true,
  },
  {
    icon: <FaBook />,
    title: 'Coding Workbook',
    format: 'PDF',
    pages: '200+ Problems',
    description: 'Practice problems with detailed solutions for all coding topics.',
    color: '#06b6d4',
    free: true,
  },
  {
    icon: <FaFilePdf />,
    title: 'Finance Essentials',
    format: 'PDF',
    pages: '85 Pages',
    description: 'Everything from personal finance to market basics explained simply.',
    color: '#f59e0b',
    free: true,
  },
  {
    icon: <FaVideo />,
    title: 'Video Tutorials',
    format: 'Video',
    pages: '40+ Hours',
    description: 'Expert-led video lessons with real-world examples and demos.',
    color: '#ec4899',
    free: false,
  },
  {
    icon: <FaBook />,
    title: 'Practice Tests',
    format: 'Online',
    pages: '10 Mock Tests',
    description: 'Simulated exam environment with timer and detailed performance analytics.',
    color: '#10b981',
    free: false,
  },
  {
    icon: <FaFilePdf />,
    title: 'Quick Revision Notes',
    format: 'PDF',
    pages: '30 Pages',
    description: 'Last-minute revision sheets with key formulas and concepts.',
    color: '#6366f1',
    free: true,
  },
];

export default function StudyMaterials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="materials" className="materials-section">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="materials-header"
        >
          <span className="materials-badge">📚 Study Material</span>
          <h2 className="materials-title">
            Prepare to <span className="materials-title-gradient">Dominate</span>
          </h2>
          <p className="materials-subtitle">
            Download free study materials and premium resources. Everything you need to ace the Olympiad.
          </p>
        </motion.div>

        <div className="row g-4">
          {materials.map((mat, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="materials-card"
                style={{ '--material-color': mat.color }}
              >
                <div className="materials-card-header">
                  <div className="materials-icon" style={{ color: mat.color }}>
                    {mat.icon}
                  </div>
                  <span className={mat.free ? 'materials-badge-free' : 'materials-badge-premium'}>
                    {mat.free ? 'FREE' : 'PREMIUM'}
                  </span>
                </div>

                <h3 className="materials-card-title">{mat.title}</h3>
                <div className="materials-meta">
                  <span>{mat.format}</span>
                  <span>•</span>
                  <span>{mat.pages}</span>
                </div>
                <p className="materials-card-description">{mat.description}</p>

                <motion.button
                  className={mat.free ? 'materials-btn-download' : 'materials-btn-locked'}
                  whileHover={mat.free ? { x: 5 } : {}}
                  disabled={!mat.free}
                >
                  {mat.free ? (
                    <>
                      <FaDownload /> Download Now
                    </>
                  ) : (
                    <>
                      <FaLock /> Unlock with Registration
                    </>
                  )}
                </motion.button>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

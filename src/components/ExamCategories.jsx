import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

const exams = [
  {
    image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800&q=80',
    title: 'Artificial Intelligence',
    description: 'Master AI fundamentals, machine learning, neural networks, and ethical AI applications.',
    topics: ['Machine Learning', 'Neural Networks', 'AI Ethics', 'Data Science', 'NLP'],
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    color: '#8b5cf6',
    questions: 50,
    duration: '60 min',
    difficulty: 'Intermediate',
  },
  {
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    title: 'Coding',
    description: 'Test your programming prowess with data structures, algorithms, and problem-solving challenges.',
    topics: ['Data Structures', 'Algorithms', 'Problem Solving', 'Python/C++', 'Web Dev'],
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    color: '#06b6d4',
    questions: 40,
    duration: '90 min',
    difficulty: 'Advanced',
  },
  {
    image: 'https://imageio.forbes.com/specials-images/imageserve/66b70d92f67db0f0ab5a4157/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
    title: 'Financial Literacy',
    description: 'Build financial intelligence with personal finance, investments, banking, and economics.',
    topics: ['Personal Finance', 'Investments', 'Banking & UPI', 'Taxation', 'Budgeting'],
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    color: '#f59e0b',
    questions: 45,
    duration: '45 min',
    difficulty: 'Beginner',
  },
];

export default function ExamCategories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="exams" className="exam-categories-section">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="exam-header"
        >
          <span className="exam-badge">🎯 Exam Categories</span>
          <h2 className="exam-title">
            Choose Your <span className="exam-title-gradient">Challenge</span>
          </h2>
          <p className="exam-subtitle">
            Three future-ready subjects designed for 21st century excellence.
          </p>
        </motion.div>

        <div className="row g-4">
          {exams.map((exam, i) => (
            <div key={i} className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="exam-card"
                style={{ '--exam-color': exam.color }}
              >
                <div className="exam-image-wrapper">
                  <img src={exam.image} alt={exam.title} className="exam-image" />
                  <div className="exam-image-overlay" style={{ background: exam.gradient }} />
                </div>

                <div className="exam-card-content">
                  <h3 className="exam-card-title">{exam.title}</h3>
                  <p className="exam-card-description">{exam.description}</p>

                  <div className="exam-meta">
                    <div className="exam-meta-item">
                      <span className="exam-meta-value">{exam.questions}</span>
                      <span className="exam-meta-label">Questions</span>
                    </div>
                    <div className="exam-meta-item">
                      <span className="exam-meta-value">{exam.duration}</span>
                      <span className="exam-meta-label">Duration</span>
                    </div>
                    <div className="exam-meta-item">
                      <span className="exam-meta-value">{exam.difficulty}</span>
                      <span className="exam-meta-label">Level</span>
                    </div>
                  </div>

                  <div className="exam-topics">
                    {exam.topics.map((topic, j) => (
                      <span key={j} className="exam-topic">{topic}</span>
                    ))}
                  </div>

                  <motion.a
                    href="#register"
                    className="exam-cta"
                    style={{ background: exam.gradient }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Register Now <FaArrowRight />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

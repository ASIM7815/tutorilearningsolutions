import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Aarav Sharma',
    role: 'Class 10, Delhi',
    text: 'tutor.i was an incredible experience! The AI exam really challenged my understanding and helped me learn new concepts. The study material was top-notch.',
    rating: 5,
    gradient: 'from-purple-500 to-violet-600',
  },
  {
    name: 'Priya Patel',
    role: 'Class 12, Mumbai',
    text: 'The Coding Olympiad pushed me beyond my limits. The mock tests were very close to the actual exam. I won a Silver medal and it boosted my confidence!',
    rating: 5,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Rohan Gupta',
    role: 'Class 9, Bangalore',
    text: 'Financial Literacy was such a unique subject. I learned about investments, budgeting, and taxes — things they don\'t teach in school. Highly recommend!',
    rating: 5,
    gradient: 'from-amber-500 to-orange-600',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />

      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4 inline-block">💬 Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What Students <span className="gradient-text">Say</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Hear from students who have participated in previous editions and excelled.
          </p>
        </motion.div>

        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div key={i} className="col-md-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card p-6 h-100"
              >
                <FaQuoteLeft className="text-2xl text-purple-500/30 mb-4" />
                <p className="text-slate-300 leading-relaxed mb-5 italic">"{t.text}"</p>

                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <FaStar key={j} className="text-amber-400 text-sm" />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

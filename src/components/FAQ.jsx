import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container, Accordion } from 'react-bootstrap';

const faqs = [
  {
    q: 'Who can participate in tutor.i 2026?',
    a: 'Any student from Class 6 to Class 12, studying in any recognized school across India, can register and participate in the National Level Student\'s Olympiad 2026.',
  },
  {
    q: 'How is the exam conducted?',
    a: 'The exam is conducted 100% online. You can take it from home on the scheduled date using a laptop or desktop with a stable internet connection. Our AI-proctored system ensures fairness.',
  },
  {
    q: 'What subjects are available?',
    a: 'We currently offer three subjects: Artificial Intelligence (AI & ML), Coding (Programming & Logic), and Financial Literacy (Finance & Economics). You can register for one or all three.',
  },
  {
    q: 'What is the registration fee?',
    a: 'The registration fee is ₹199 per subject (early bird offer, originally ₹499). This includes free study materials, access to mock tests, and a participation certificate.',
  },
  {
    q: 'How do I get study materials?',
    a: 'Once you register, you can download free study materials directly from your dashboard. Premium resources like video tutorials and detailed mock tests are also available.',
  },
  {
    q: 'When will results be declared?',
    a: 'Results are typically declared within 15 days of the exam. You will receive a detailed scorecard with subject-wise and topic-wise analysis via email.',
  },
  {
    q: 'Are there prizes for top performers?',
    a: 'Yes! Top performers receive medals (Gold, Silver, Bronze), cash prizes, certificates of excellence, and recognition on our national leaderboard.',
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />

      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4 inline-block">❓ FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Got <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Find answers to the most commonly asked questions about the Olympiad.
          </p>
        </motion.div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Accordion defaultActiveKey="0" className="d-flex flex-column gap-3">
                {faqs.map((faq, i) => (
                  <Accordion.Item
                    key={i}
                    eventKey={String(i)}
                    className="glass-card border-0 overflow-hidden"
                  >
                    <Accordion.Header>
                      <span className="text-white font-medium">{faq.q}</span>
                    </Accordion.Header>
                    <Accordion.Body className="text-slate-400 leading-relaxed">
                      {faq.a}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

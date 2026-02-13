import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { FaTrophy, FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const footerLinks = {
  'Quick Links': ['Home', 'About', 'Exams', 'Study Material', 'FAQ'],
  'Exams': ['AI Olympiad', 'Coding Olympiad', 'Finance Olympiad'],
  'Support': ['Contact Us', 'Terms & Conditions', 'Privacy Policy', 'Refund Policy'],
};

const socials = [
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  { icon: <FaTwitter />, href: '#', label: 'Twitter' },
  { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
  { icon: <FaYoutube />, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer id="contact" className="footer-section">
      <Container>
        <div className="row g-5 mb-12">
          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a href="#home" className="footer-brand">
                <div className="footer-logo">
                  <FaTrophy />
                </div>
                <div>
                  <span className="footer-brand-name">tutor.i</span>
                  <span className="footer-brand-year">2026</span>
                </div>
              </a>
              <p className="footer-description">
                National Level Student's Olympiad — India's fastest-growing competitive exam platform for AI, Coding, and Financial Literacy.
              </p>

              <div className="footer-contact">
                <a href="mailto:info@tutor.i" className="footer-contact-item">
                  <FaEnvelope /> info@tutor.i
                </a>
                <a href="tel:+919876543210" className="footer-contact-item">
                  <FaPhone /> +91 98765 43210
                </a>
                <span className="footer-contact-item">
                  <FaMapMarkerAlt /> New Delhi, India
                </span>
              </div>
            </motion.div>
          </div>

          {Object.entries(footerLinks).map(([title, links], i) => (
            <div key={title} className="col-6 col-lg-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
              >
                <h4 className="footer-links-title">{title}</h4>
                <ul className="footer-links-list">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer-link">{link}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}

          <div className="col-lg-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="footer-links-title">Stay Updated</h4>
              <p className="footer-newsletter-text">Get exam dates, tips, and updates directly in your inbox.</p>
              <div className="footer-newsletter">
                <input type="email" placeholder="Your email" className="footer-input" />
                <button className="footer-btn">Join</button>
              </div>

              <div className="footer-socials">
                {socials.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    className="footer-social-link"
                    whileHover={{ scale: 1.1, y: -3 }}
                    aria-label={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 National Level Student's Olympiad. All rights reserved.
          </p>
          <p className="footer-tagline">
            Made with ❤️ for India's future leaders
          </p>
        </div>
      </Container>
    </footer>
  );
}

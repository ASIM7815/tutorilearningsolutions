import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Exams', href: '#exams' },
  { name: 'Study Material', href: '#materials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      setVisible(currentY < lastScrollY.current || currentY < 50);
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl shadow-lg shadow-purple-900/10' : ''
      }`}
      style={{ backgroundColor: '#005278' }}
    >
      <Container>
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 no-underline"
            whileHover={{ scale: 1.05 }}
          >
            <img src="/tutor.i.png" alt="Logo" className="h-8 md:h-10 w-auto" />
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="nav-button text-sm no-underline font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#register"
              className="register-button ml-2 text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden bg-blue-500 border-0 p-2.5 rounded-full transition-all hover:scale-105 hover:bg-blue-600 shadow-md"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <HiX className="text-white text-xl" />
            ) : (
              <div className="flex flex-col gap-1.5 w-6">
                <motion.span 
                  className="h-1 w-full bg-white rounded-full"
                  whileHover={{ scaleX: 1.1 }}
                />
                <motion.span 
                  className="h-1 w-full bg-white rounded-full"
                  whileHover={{ scaleX: 1.1 }}
                />
                <motion.span 
                  className="h-1 w-full bg-white rounded-full"
                  whileHover={{ scaleX: 1.1 }}
                />
              </div>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#005278]/98 backdrop-blur-xl border-t border-white/10 shadow-xl"
          >
            <Container className="py-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="mobile-nav-button no-underline text-base"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a 
                  href="#register" 
                  className="register-button text-center mt-3" 
                  onClick={() => setMobileOpen(false)}
                  whileTap={{ scale: 0.98 }}
                >
                  Register Now
                </motion.a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

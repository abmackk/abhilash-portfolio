import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="cookie-consent"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="cookie-content">
        <Cookie size={24} className="cookie-icon" />
        <div className="cookie-text">
          <h4>Cookie Consent</h4>
          <p>
            We use cookies to enhance your browsing experience and analyze site traffic. 
            By clicking "Accept", you consent to our use of cookies.
          </p>
        </div>
        <div className="cookie-actions">
          <motion.button
            className="btn btn-outline btn-sm"
            onClick={declineCookies}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Decline
          </motion.button>
          <motion.button
            className="btn btn-primary btn-sm"
            onClick={acceptCookies}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Accept
          </motion.button>
        </div>
        <button className="cookie-close" onClick={declineCookies}>
          <X size={16} />
        </button>
      </div>
    </motion.div>
  );
}

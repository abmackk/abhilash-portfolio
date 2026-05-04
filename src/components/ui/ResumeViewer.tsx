import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="resume-viewer-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="resume-viewer-modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="resume-viewer-header">
              <h3>
                <FileText size={20} />
                Resume Preview
              </h3>
              <div className="resume-viewer-actions">
                <motion.a
                  href="/Abhilash_Makode_Resume.pdf"
                  download="Abhilash_Makode_Resume.pdf"
                  className="btn btn-primary btn-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={16} />
                  Download
                </motion.a>
                <motion.button
                  className="btn btn-outline btn-sm"
                  onClick={onClose}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={16} />
                  Close
                </motion.button>
              </div>
            </div>
            <div className="resume-viewer-content">
              <iframe
                src="/Abhilash_Makode_Resume.pdf"
                title="Resume Preview"
                className="resume-iframe"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

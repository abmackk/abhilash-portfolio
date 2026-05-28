import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileBadge, Download, FileText, Sparkles, Clock, Briefcase, ExternalLink, X } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export function Resume() {
  const [showViewer, setShowViewer] = useState(false);
  const [ReactPdf, setReactPdf] = useState<typeof import('react-pdf') | null>(null);

  useEffect(() => {
    if (showViewer && !ReactPdf) {
      import('react-pdf').then((mod) => {
        mod.pdfjs.GlobalWorkerOptions.workerSrc = new URL(
          'pdfjs-dist/build/pdf.worker.min.mjs',
          import.meta.url,
        ).toString();
        setReactPdf(mod);
      });
    }
  }, [showViewer, ReactPdf]);

  return (
    <section id="resume">
      <AnimatedSection>
        <div className="resume-section">
          <div className="resume-glow" />
          <div className="resume-content">
            <div className="resume-icon">
              <FileBadge size={48} />
            </div>
            <div className="resume-text">
              <span className="resume-label">// GET MY RESUME</span>
              <h2>Ready to Explore My Journey?</h2>
              <p>
                Download my comprehensive resume to learn more about my experience, 
                technical skills, certifications, and achievements in cloud engineering and DevOps.
              </p>
            </div>
            <div className="resume-buttons">
              <motion.button
                onClick={() => setShowViewer(true)}
                className="resume-download-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} />
                <span>View Resume</span>
                <FileText size={18} />
              </motion.button>
              <motion.a
                href={`${import.meta.env.BASE_URL}Abhilash_Makode_Resume.pdf`}
                download="Abhilash_Makode_Resume.pdf"
                className="resume-download-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <span>Download Resume</span>
                <FileText size={18} />
              </motion.a>
            </div>
            <div className="resume-stats">
              <div className="resume-stat">
                <Sparkles size={16} />
                <span>PDF Format</span>
              </div>
              <div className="resume-stat">
                <Clock size={16} />
                <span>Updated 2026</span>
              </div>
              <div className="resume-stat">
                <Briefcase size={16} />
                <span>5+ Years Exp</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatePresence>
        {showViewer && (
          <motion.div
            className="resume-viewer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowViewer(false)}
          >
            <motion.div
              className="resume-viewer-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="resume-viewer-header">
                <h3>
                  <FileText size={20} />
                  Abhilash Makode - Resume
                </h3>
                <div className="resume-viewer-actions">
                  <motion.a
                    href={`${import.meta.env.BASE_URL}Abhilash_Makode_Resume.pdf`}
                    download="Abhilash_Makode_Resume.pdf"
                    className="resume-viewer-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download size={18} />
                    <span>Download</span>
                  </motion.a>
                  <motion.button
                    className="resume-viewer-close"
                    onClick={() => setShowViewer(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={24} />
                  </motion.button>
                </div>
              </div>
              <div className="resume-viewer-content">
                {ReactPdf ? (
                  <PdfViewer Document={ReactPdf.Document} Page={ReactPdf.Page} />
                ) : (
                  <motion.div
                    className="resume-viewer-loading"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <div className="loading-spinner" />
                    <span>Loading resume...</span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function PdfViewer({ Document, Page }: { Document: typeof import('react-pdf').Document; Page: typeof import('react-pdf').Page }) {
  const [numPages, setNumPages] = useState<number>();
  const pdfUrl = `${import.meta.env.BASE_URL}Abhilash_Makode_Resume.pdf`;

  return (
    <Document
      file={pdfUrl}
      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      className="resume-pdf-document"
    >
      {Array.from(new Array(numPages), (_, index) => (
        <Page
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          width={1000}
          className="resume-pdf-page"
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      ))}
    </Document>
  );
}

import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "./footer.css";

export default function Footer() {
  const [showForm, setShowForm] = useState(false);
  const [question, setQuestion] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    setIsMobile(/android|iphone|ipad|ipod/.test(ua));
  }, []);

  const handleSubmit = () => {
    const subject = "Question from Portfolio";
    const body = encodeURIComponent(question);

    const desktopLink = `https://mail.google.com/mail/?view=cm&fs=1&to=mohan113moha@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`;
    const mobileLink = `mailto:mohan113moha@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    if (isMobile) {
      window.location.href = mobileLink;
    } else {
      window.open(desktopLink, "_blank");
    }

    setShowForm(false);
    setQuestion("");
  };

  const getGmailLink = () => {
    return isMobile
      ? "mailto:mohan113moha@gmail.com"
      : "https://mail.google.com/mail/?view=cm&fs=1&to=mohan113moha@gmail.com";
  };

  const getLinkedInLink = () => {
    return "https://linkedin.com/in/mohan-m1105";
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.3 }}
      className="footer-container"
    >
      {/* SVG Wave */}
      <svg className="wave-top" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="#1e40af"
          fillOpacity="1"
          d="M0,224L30,213.3C60,203,120,181,180,165.3C240,149,300,139,360,133.3C420,128,480,128,540,144C600,160,660,192,720,213.3C780,235,840,245,900,234.7C960,224,1020,192,1080,170.7C1140,149,1200,139,1260,149.3C1320,160,1380,192,1410,208L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        />
      </svg>

      <footer className="footer-main">
        <div className="footer-grid">
          {/* Contact Section */}
          <div className="footer-left">
            <h2>Let's Connect</h2>
            <div className="contact-icons">
              <a href={getGmailLink()} title="Email" rel="noopener noreferrer">
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/AIMOHANDASS"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={getLinkedInLink()}
                title="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Ask a Question Section */}
          <div className="footer-right">
            {!showForm ? (
              <button onClick={() => setShowForm(true)} className="ask-btn-ux">
                Ask a Question
              </button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="form-card"
              >
                <textarea
                  placeholder="Type your question..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
                {question.trim() && (
                  <div className="form-buttons">
                    <button onClick={handleSubmit} className="send-btn">
                      Send
                    </button>
                    <button
                      onClick={() => {
                        setShowForm(false);
                        setQuestion("");
                      }}
                      className="cancel-btn"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
        <div className="footer-copy">© 2025 Mohan M • All Rights Reserved</div>
      </footer>
    </motion.section>
  );
}

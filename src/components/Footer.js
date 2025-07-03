import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "./footer.css";

export default function Footer() {
  const [showForm, setShowForm] = useState(false);
  const [question, setQuestion] = useState("");
  const [platform, setPlatform] = useState("desktop");

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (/android/.test(ua)) {
      setPlatform("android");
    } else if (/iphone|ipad|ipod/.test(ua)) {
      setPlatform("ios");
    } else {
      setPlatform("desktop");
    }
  }, []);

  const handleSubmit = () => {
    const subject = "Question from Portfolio";
    const body = encodeURIComponent(question);

    let link = "";

    if (platform === "android") {
      // Try to open Gmail App on Android
      link = `intent://#Intent;action=android.intent.action.SENDTO;scheme=mailto;package=com.google.android.gm;S.mailto=mohan113moha@gmail.com;end`;
    } else if (platform === "ios") {
      // Try to open Gmail App on iOS
      link = `googlegmail:///co?to=mohan113moha@gmail.com&subject=${encodeURIComponent(
        subject
      )}&body=${body}`;
    } else {
      // Default: open Gmail web compose on desktop
      link = `https://mail.google.com/mail/?view=cm&fs=1&to=mohan113moha@gmail.com&su=${encodeURIComponent(
        subject
      )}&body=${body}`;
    }

    // Try to open the link
    window.open(link, "_blank");

    setShowForm(false);
    setQuestion("");
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
      <svg className="wave-top" viewBox="0 0 1440 320">
        <path
          fill="#1e40af"
          fillOpacity="1"
          d="M0,128L40,112C80,96,160,64,240,64C320,64,400,96,480,106.7C560,117,640,107,720,106.7C800,107,880,117,960,128C1040,139,1120,149,1200,144C1280,139,1360,117,1400,106.7L1440,96L1440,0L0,0Z"
        />
      </svg>

      <footer className="footer-main">
        <div className="footer-grid">
          {/* Left: Contact Icons */}
          <div className="footer-left">
            <h2>Let's Connect</h2>
            <div className="contact-icons">
              <a
                href={
                  platform === "android"
                    ? "mailto:mohan113moha@gmail.com"
                    : platform === "ios"
                    ? "googlegmail:///co?to=mohan113moha@gmail.com"
                    : "https://mail.google.com/mail/?view=cm&fs=1&to=mohan113moha@gmail.com"
                }
                target="_blank"
                rel="noopener noreferrer"
                title="Email"
              >
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
                href="https://linkedin.com/in/mohan-m1105"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right: Ask a Question */}
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

// File: src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import "./hero.css";
import { motion } from "framer-motion";
import { FaTimes, FaDownload } from "react-icons/fa";

const roles = [
  "Python Developer",
  "Data Analyst",
  "MERN Stack",
];

export default function Hero() {
  const [showResume, setShowResume] = useState(false);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    const timeout = setTimeout(() => {
      setText(
        deleting
          ? currentRole.substring(0, charIndex - 1)
          : currentRole.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => prev + (deleting ? -1 : 1));

      if (!deleting && charIndex === currentRole.length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, deleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index]);

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="home"
      >
        <section id="home" className="hero">
          <img src="./images/profile.png" alt="Profile" className="hero-img" />
          <h2>Hi, I'm Mohan M</h2>
          <p className="typewriter">{text}<span className="cursor">|</span></p>
          <button className="resume-btn" onClick={() => setShowResume(true)}>
            View Resume
          </button>
        </section>
      </motion.section>

      {showResume && (
        <div className="resume-modal">
          <div className="resume-container">
            <button className="close-btn" onClick={() => setShowResume(false)}>
              <FaTimes />
            </button>
            <iframe
              src="./images/Mohan.pdf"
              title="Mohan Resume"
              className="resume-iframe"
            ></iframe>
            <a
              href="./images/Mohan.pdf"
              download="Mohan_M_Resume.pdf"
              className="download-btn"
            >
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}

// File: src/components/About.jsx
import React from "react";
import "./about.css";


import { motion } from 'framer-motion';


export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.2 }} // 👈 keeps animating on every scroll in
      className="about"
    >
    <section id="about" className="about">
      <h3>About Me</h3>
      <p>
        I'm currently pursuing B.Tech in Artificial Intelligence and Data Science at Chettinad College of Engineering & Technology. Passionate about building intelligent systems, I'm skilled in ML, fullstack web development, and creative UI/UX design. I love solving problems and building impactful tech.
      </p>
    </section>
    </motion.section>
  );
}
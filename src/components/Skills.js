// File: src/components/Skills.jsx
import React from "react";
import "./skills.css";
import { motion } from 'framer-motion';


export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.2 }} // 👈 keeps animating on every scroll in
      className="skills"
    >
    <section id="skills" className="skills">
      <h3>Skills</h3>
      <div>
        <div>Fullstack Development (MERN)</div>
        <div>Python Developer</div>
        <div>Data Analysis</div>
        <div>Team Coordination</div>
        <div>SEO Fundamentals</div>
        <div>UI/UX Design</div>
      </div>
    </section>
        </motion.section>
  );
}
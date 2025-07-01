// File: src/components/Projects.jsx
import React from "react";
import "./projects.css";
import { motion } from 'framer-motion';


export default function Projects() {
  return (
    <motion.section
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }} // 👈 keeps animating on every scroll in
          className="projects"
        >
    <section id="projects" className="projects">
      <h3>Projects</h3>
      <div className="card">
        <h4>Hostel Attendance System</h4>
        <p>Face detection + SQL integration for hostel automation.</p>
      </div>
      <div className="card">
        <h4>Gunshot Detection System</h4>
        <p>Uses Deep Learning with TensorFlow for real-time detection.</p>
      </div>
      <div className="card">
        <h4>Fullstack Project – StatStyle</h4>
        <p>MERN stack web app deployed at <a href="https://statstyle.vercel.app/home">statstyle.vercel.app</a></p>
      </div>
    </section>
    </motion.section>
  );
}
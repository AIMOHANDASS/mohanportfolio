// File: src/components/Certifications.jsx

import React from "react";
import "./certificate.css";
import { motion } from "framer-motion"; // 👈 Add animation support

const certifications = [
  {
    title: "Search Engine Optimization (SEO) with Squarespace",
    organization: "Coursera",
    date: "May 22, 2025",
    url: "https://coursera.org/share/2f2dcd054b26d7204e8bfaeefc5fdac6",
    description: [
      "🔍 Implementing SEO best practices",
      "🛠️ Optimizing websites using Squarespace tools",
      "📈 Enhancing online visibility and search rankings",
    ],
  },
  {
    title: "NPTEL: Privacy and Security in Online Social Media",
    organization: "NPTEL & SWAYAM",
    date: "April 2025",
    url: "https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS79S65870065504483086",
    description: [
      "🔐 Online privacy risks",
      "📊 Social media data analysis",
      "🛡️ Security mechanisms in digital platforms",
    ],
  },
  {
    title: "TechSaksham",
    organization: "Microsoft and SAP (Edunet Foundation & AICTE)",
    date: "2024-25",
    url: "https://www.techsaksham.org/verify-certificate-v2/TSPIN25_622000",
    description: ["🚀 Future-ready digital skills", "🏭 Industry-aligned knowledge"],
  },
  {
    title: "Web Development and Design",
    organization: "IBM Career Education Program",
    date: "October 14, 2024",
    url: "https://courses.ibmcep.cognitiveclass.ai/certificates/2553ae56dd714601b2a4857d82d78aa7",
    description: [
      "🖥️ In-depth front-end technologies",
      "⚡ Responsive and dynamic web applications",
    ],
  },
];

const Certifications = () => {
  return (
    <motion.section
      id="certifications"
      className="certificate"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
    <section id="certifications" className="certificate">
      <h3>Certifications</h3>
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-title"
            >
              {cert.title}
            </a>
            <p className="cert-meta">{cert.organization} — {cert.date}</p>
            <ul className="cert-details">
              {cert.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div></section>
    </motion.section>
  );
};

export default Certifications;

// File: src/components/Navbar.jsx
import React from "react";
import "./navbar.css";


export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="0" className="logo-link">
        <h1>Mohan M</h1>
      </a>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#certifications">Certificate</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
}

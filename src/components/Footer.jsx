import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-info">
            <h3>Let's Connect</h3>
            <p>Open for opportunities and interesting projects</p>
          </div>
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><Github /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
            <a href="mailto:contact@example.com"><Mail /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Made by Firafis Berhanu</p>
          <p>&copy; {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
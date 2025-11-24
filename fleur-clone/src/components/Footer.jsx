// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="footer section-dark">
      <div className="container footer-grid">
        <div>
          <h3 className="logo">Fleur</h3>
          <p>
            A refined layout for weddings, events, and celebrations. Built as a
            React single-page experience.
          </p>
        </div>
        <div>
          <h4>Pages</h4>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4>Follow</h4>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Pinterest</li>
          </ul>
        </div>
        <div>
          <h4>Newsletter</h4>
          <p>Stay in touch for updates and inspiration.</p>
          <div className="newsletter">
            <input type="email" placeholder="Email address" />
            <button className="primary-btn">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Fleur · All rights reserved.</p>
          <p>Made with React for Code Nimbus assignment.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// src/components/IconFeatures.jsx
import React from "react";

const features = [
  {
    title: "Discover What’s Possible",
    text: "Showcase venues, services, and memories with a modern, refined layout.",
  },
  {
    title: "People Really Matter",
    text: "Put couples, guests, and stories at the center of your design.",
  },
  {
    title: "Having A Plan Feels Good",
    text: "Use clean sections to guide visitors through every important detail.",
  },
];

const IconFeatures = () => {
  return (
    <section className="section section-light">
      <div className="container">
        <div className="section-intro center">
          <h2 className="section-title">We’re Sharing Everything</h2>
          <p className="section-subtitle">
            Elegant layouts, subtle icons, and smooth animations come together
            to create a polished one-page experience.
          </p>
        </div>
        <div className="icon-features-grid">
          {features.map((f, idx) => (
            <div key={idx} className="icon-feature card fade-in-up">
              <div className="icon-circle">{idx + 1}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconFeatures;

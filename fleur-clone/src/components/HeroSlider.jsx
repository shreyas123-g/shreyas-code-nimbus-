// src/components/HeroSlider.jsx
import React, { useEffect, useState } from "react";

const slides = [
  {
    title: "Style & Grace",
    subtitle: "Create an elegant wedding experience online.",
    cta: "View Demos",
  },
  {
    title: "Designed With Care",
    subtitle:
      "Soft tones, subtle motion and a layout crafted for special moments.",
    cta: "Discover More",
  },
  {
    title: "Simply Charming",
    subtitle: "Beautiful sections and layouts for events and celebrations.",
    cta: "Explore Templates",
  },
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${
              index === activeIndex ? "hero-slide--active" : ""
            }`}
          >
            <div className="container hero-content">
              <p className="hero-overline">Weddings & Celebrations</p>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <button className="primary-btn">{slide.cta}</button>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${
              index === activeIndex ? "hero-dot--active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;

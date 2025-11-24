
import React from "react";

const projects = [
  { title: "Events", category: "Artistic" },
  { title: "Sketches", category: "Modern" },
  { title: "Cozy Pieces", category: "Photography" },
  { title: "Project #14", category: "Print" },
  { title: "Destinations", category: "Photography" },
  { title: "HQ Setup", category: "Artistic" },
  { title: "Colourful", category: "Modern" },
  { title: "Daydreaming", category: "Print" },
];

const PortfolioSection = () => {
  return (
    <section className="section section-light">
      <div className="container">
        <div className="section-intro center">
          <h2 className="section-title">Our Amazing Work</h2>
          <p className="section-subtitle">
            A grid layout for galleries, events, or selected memories from your
            portfolio.
          </p>
        </div>

        <div className="portfolio-filters">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Artistic</button>
          <button className="filter-btn">Modern</button>
          <button className="filter-btn">Photography</button>
          <button className="filter-btn">Print</button>
        </div>

        <div className="portfolio-grid">
          {projects.map((p, idx) => (
            <div key={idx} className="portfolio-card fade-in-up">
              <div className="portfolio-image-placeholder" />
              <div className="portfolio-overlay">
                <h3>{p.title}</h3>
                <p>{p.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

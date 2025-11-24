
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "This layout made our wedding website feel effortless and beautifully curated.",
    name: "Nicole Burke",
    role: "Wedding Planner",
  },
  {
    quote:
      "The animations are subtle but impactful, and the structure is very easy to customize.",
    name: "Daniel Mitchell",
    role: "Designer",
  },
  {
    quote:
      "Clean typography, elegant spacing, and a timeless color palette.",
    name: "Raymond Myers",
    role: "Developer",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section section-light">
      <div className="container">
        <div className="section-intro center">
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">
            Share kind words from couples, partners, or clients with a minimal
            slider.
          </p>
        </div>
        <div className="testimonials">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`testimonial ${
                idx === active ? "testimonial--active" : ""
              }`}
            >
              <p className="testimonial-quote">“{t.quote}”</p>
              <p className="testimonial-name">{t.name}</p>
              <p className="testimonial-role">{t.role}</p>
            </div>
          ))}
          <div className="testimonial-dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`hero-dot ${
                  idx === active ? "hero-dot--active" : ""
                }`}
                onClick={() => setActive(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

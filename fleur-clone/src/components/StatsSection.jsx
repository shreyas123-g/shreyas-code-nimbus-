
import React from "react";

const stats = [
  { label: "Design", value: 90 },
  { label: "Marketing", value: 70 },
  { label: "Development", value: 80 },
  { label: "User Experience", value: 85 },
];

const StatsSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-intro">
          <h2 className="section-title">
            Engaging, creative pages with purpose.
          </h2>
          <p className="section-subtitle">
            Present your services using smooth progress bars and highlight where
            you excel.
          </p>
        </div>
        <div className="stats-grid">
          <div className="stats-text">
            <p>
              Use this section to describe your strengths, services, or the way
              you support couples before and after the event.
            </p>
          </div>
          <div className="stats-bars">
            {stats.map((s, idx) => (
              <div key={idx} className="stat-row">
                <div className="stat-label">
                  {s.label} <span>{s.value}%</span>
                </div>
                <div className="stat-bar">
                  <div
                    className="stat-bar-fill"
                    style={{ width: `${s.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

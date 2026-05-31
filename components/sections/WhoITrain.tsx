"use client";

import { WHO_I_TRAIN } from "@/lib/constants";
import { RevealWrapper } from "@/components/ui/RevealWrapper";

// Custom card icons matching original SVGs exactly
const icons = [
  // Beginners icon
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
  // Athletes icon
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>,
  // Weight Loss icon
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>,
  // Transform icon
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4l3 3" />
  </svg>,
];

export function WhoITrain() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    const rotateX = -((y / rect.height) - 0.5) * 6;
    const rotateY = ((x / rect.width) - 0.5) * 6;
    card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "";
  };

  return (
    <section className="who-train section" id="who">
      <div className="container">
        <RevealWrapper className="section-header">
          <div className="section-tag">Clients</div>
          <h2 className="section-title">
            Who I <span className="gradient-text">Train</span>
          </h2>
          <p className="section-sub">
            I work with a diverse range of clients across all fitness levels and goals
          </p>
        </RevealWrapper>

        <div className="who-grid">
          {WHO_I_TRAIN.map((item, idx) => (
            <RevealWrapper
              key={item.id}
              className="who-card"
              delay={idx * 80}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              <div className="who-icon">{icons[idx]}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

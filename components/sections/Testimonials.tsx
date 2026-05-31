"use client";

import Image from "next/image";
import { TESTIMONIALS, type TransformType } from "@/lib/constants";
import { RevealWrapper } from "@/components/ui/RevealWrapper";

// Badge config mapping exactly to the original style.css rules
const badgeIcons: Record<TransformType, React.ReactNode> = {
  "weight-loss": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  ),
  athletic: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  muscle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
    </svg>
  ),
};

const badgeClasses: Record<TransformType, string> = {
  "weight-loss": "weight-loss-badge",
  athletic: "athletic-badge",
  muscle: "muscle-badge",
};

export function Testimonials() {
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
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <RevealWrapper className="section-header">
          <div className="section-tag">Transformations</div>
          <h2 className="section-title">
            Real Results, <span className="gradient-text">Real Stories</span>
          </h2>
          <p className="section-sub">
            Verified transformations from clients across Greater Noida — with proof
          </p>
        </RevealWrapper>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, idx) => (
            <RevealWrapper
              key={t.id}
              className="testimonial-card"
              delay={idx * 80}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div>
                <div className={`transform-badge ${badgeClasses[t.type]}`}>
                  {badgeIcons[t.type]}
                  {t.badgeLabel}
                </div>
                <div className="transform-stats">
                  <div className="transform-stat">
                    <span className="t-num">{t.statValue}</span>
                    <span className="t-lbl">{t.statLabel}</span>
                  </div>
                  <div className="transform-divider"></div>
                  <div className="transform-stat">
                    <span className="t-num">{t.days}</span>
                    <span className="t-lbl">{t.daysLabel}</span>
                  </div>
                </div>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">{t.quote}</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar-img">
                  <Image
                    src={t.image}
                    alt={`${t.name} weight loss client Greater Noida`}
                    width={52}
                    height={52}
                    className="object-cover object-top"
                  />
                </div>
                <div className="author-info">
                  <span className="author-name">{t.name}</span>
                  <span className="author-role">{t.role}</span>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

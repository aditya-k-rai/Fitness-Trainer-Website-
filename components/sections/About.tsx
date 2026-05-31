"use client";

import Image from "next/image";
import { RevealWrapper } from "@/components/ui/RevealWrapper";

export function About() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    const rotateX = -((y / rect.height) - 0.5) * 8;
    const rotateY = ((x / rect.width) - 0.5) * 8;
    card.style.transform = `translateY(-4px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "";
  };

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Images */}
          <RevealWrapper
            className="about-images"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
          >
            <div className="about-img-main" style={{ position: "relative" }}>
              <Image
                src="/images/body.png"
                alt="Aneesh Jha Fitness Trainer Greater Noida – Body Transformation"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
            <div className="about-experience-badge">
              <span className="exp-number">8+</span>
              <span className="exp-label">Years Experience</span>
            </div>
          </RevealWrapper>

          {/* Content */}
          <RevealWrapper className="about-content">
            <div className="section-tag">About Me</div>
            <h2 className="section-title">
              Certified Fitness Trainer <br />
              <span className="gradient-text">Based in Greater Noida</span>
            </h2>
            <p className="about-text">
              Hi, I&apos;m <strong>Aneesh Jha</strong> — a passionate certified fitness trainer and athlete based in Greater Noida. My journey in fitness started as a competitive track &amp; field athlete, and that fire has never gone out.
            </p>
            <p className="about-text">
              I believe fitness is not just about the body — it&apos;s a complete lifestyle transformation. Whether you&apos;re a complete beginner stepping into the gym for the first time, a seasoned athlete pushing for peak performance, or someone on a weight loss journey, I create personalized programs that deliver real, measurable results.
            </p>
            <div className="about-traits">
              <div className="trait-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Certified Personal Trainer
              </div>
              <div className="trait-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Competitive Track &amp; Field Athlete
              </div>
              <div className="trait-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Science-Based Training
              </div>
              <div className="trait-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Nutrition Planning
              </div>
            </div>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="btn btn-primary"
              id="aboutCtaBtn"
            >
              <span>Book a Free Consultation</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

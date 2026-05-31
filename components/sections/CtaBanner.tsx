"use client";

import Image from "next/image";
import { RevealWrapper } from "@/components/ui/RevealWrapper";

export function CtaBanner() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="cta-banner">
      <div className="cta-bg">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero.png"
            alt="Fitness transformation Greater Noida"
            fill
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
            sizes="100vw"
          />
        </div>
        <div className="cta-overlay"></div>
      </div>
      <div className="container">
        <RevealWrapper className="cta-content">
          <h2>
            Ready to Start Your <span className="gradient-text">Transformation?</span>
          </h2>
          <p>
            Your first session is completely <strong>FREE</strong>. No commitments. Just results.
          </p>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="btn btn-primary btn-large"
            id="ctaBannerBtn"
          >
            <span>Book Your Free Session</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </RevealWrapper>
      </div>
    </section>
  );
}

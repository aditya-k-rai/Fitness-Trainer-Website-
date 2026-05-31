"use client";

import { SITE, PRICING_PERKS } from "@/lib/constants";
import { RevealWrapper } from "@/components/ui/RevealWrapper";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "20px", height: "20px" }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export function PricingCTA() {
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

  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hi Aneesh! I'd like to know about your pricing and training packages 💪"
  )}`;

  return (
    <section className="pricing-cta section" id="pricing">
      <div className="container">
        <RevealWrapper className="pricing-cta-card">
          {/* Left info */}
          <div className="pricing-cta-left">
            <div className="section-tag">Pricing</div>
            <h2 className="section-title" style={{ marginBottom: "16px" }}>
              Flexible Plans <span className="gradient-text">for Every Goal</span>
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "480px" }}>
              Every client gets a <strong style={{ color: "var(--text-primary)" }}>fully customized plan</strong> — so pricing is tailored to your specific goals, duration, and training frequency. No one-size-fits-all packages here.
            </p>
            <ul className="pricing-perks">
              {PRICING_PERKS.map((perk, idx) => (
                <li key={idx}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "18px", height: "18px", marginRight: "10px", color: "var(--accent-primary)", display: "inline-block" }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {perk.includes("FREE") ? (
                    <span>
                      First session is completely <strong>FREE</strong>
                    </span>
                  ) : (
                    perk
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Card */}
          <div className="pricing-cta-right">
            <div
              className="pricing-card-inner"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              <div className="pricing-icon">
                <WhatsAppIcon />
              </div>
              <h3>Get Your Custom Quote</h3>
              <p>
                Chat with me directly on WhatsApp. I&apos;ll understand your goal, share the right plan, and give you the best price — in under 5 minutes.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-full"
                id="pricingWhatsappBtn"
              >
                <WhatsAppIcon />
                <span>Ask on WhatsApp</span>
              </a>
              <p className="pricing-note">Typically responds in under 2 hours</p>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

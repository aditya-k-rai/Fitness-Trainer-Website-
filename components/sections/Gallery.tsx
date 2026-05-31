"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/lib/constants";
import { RevealWrapper } from "@/components/ui/RevealWrapper";

export function Gallery() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; label: string } | null>(null);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightbox(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <RevealWrapper className="section-header">
          <div className="section-tag">Gallery</div>
          <h2 className="section-title">
            In <span className="gradient-text">Action</span>
          </h2>
          <p className="section-sub">Moments from training sessions, competitions &amp; the journey</p>
        </RevealWrapper>

        <RevealWrapper className="gallery-grid">
          {GALLERY_ITEMS.map((item) => {
            const isLarge = item.span === "col";
            const isTall = item.span === "row";
            return (
              <div
                key={item.id}
                onClick={() => setLightbox({ src: item.src, alt: item.alt, label: item.label })}
                className={`gallery-item ${isLarge ? "gallery-item-large" : ""} ${
                  isTall ? "gallery-item-tall" : ""
                }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover object-top"
                    sizes={
                      isLarge
                        ? "(max-width: 768px) 100vw, 800px"
                        : isTall
                        ? "(max-width: 768px) 50vw, 400px"
                        : "(max-width: 768px) 50vw, 400px"
                    }
                  />
                </div>
                <div className="gallery-overlay">
                  <span>{item.label}</span>
                </div>
              </div>
            );
          })}
        </RevealWrapper>
      </div>

      {/* Lightbox Overlay */}
      {lightbox && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightbox(null);
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            background: "rgba(0,0,0,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "16px",
            cursor: "pointer",
            backdropFilter: "blur(8px)",
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              color: "white",
              fontSize: "1.2rem",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>

          {/* Lightbox Image */}
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            style={{
              maxWidth: "90vw",
              maxHeight: "80vh",
              borderRadius: "16px",
              boxShadow: "0 40px 120px rgba(0,0,0,0.8)",
              animation: "scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />

          {/* Caption */}
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: "0.85rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            {lightbox.label}
          </p>
        </div>
      )}
    </section>
  );
}

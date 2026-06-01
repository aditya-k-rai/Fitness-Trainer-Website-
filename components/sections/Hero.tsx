"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Award, ChevronDown } from "lucide-react";

/* ─── Count-up ──────────────────────────────────────────────────────────── */
function Counter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            let t0: number | null = null;
            const dur = 2200;
            const step = (ts: number) => {
              if (!t0) t0 = ts;
              const p = Math.min((ts - t0) / dur, 1);
              setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
              if (p < 1) requestAnimationFrame(step);
              else setCount(target);
            };
            requestAnimationFrame(step);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="flex flex-col">
      <span
        className="font-black leading-none"
        style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)", color: "var(--accent-primary)" }}
      >
        {count}
        <span style={{ color: "var(--accent-secondary)" }}>{suffix}</span>
      </span>
      <span
        className="font-semibold uppercase tracking-wider mt-0.5"
        style={{ fontSize: "clamp(0.65rem, 0.8vw, 0.75rem)", color: "rgba(255,255,255,0.5)" }}
      >
        {label}
      </span>
    </div>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────────────── */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  const videoScale = useTransform(smooth, [0, 1], [1, 1.12]);
  const videoY     = useTransform(smooth, [0, 1], ["0%", "16%"]);
  const contentY   = useTransform(smooth, [0, 0.6], ["0%", "-10%"]);
  const contentOp  = useTransform(smooth, [0, 0.45], [1, 0]);
  const tiltX      = useTransform(smooth, [0, 1], [0, -5]);
  const tiltY      = useTransform(smooth, [0, 1], [0, 2]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const v = videoRef.current;
    if (v) { v.muted = true; v.play().catch(() => {}); }
  }, []);

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };
  const fade = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section ref={sectionRef} id="home" className="relative w-full min-h-screen overflow-hidden">

      {/* ── VIDEO ── */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: videoScale, y: videoY, transformOrigin: "center center" }}
      >
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover hero-video"
          aria-hidden="true"
        />
      </motion.div>

      {/* ── LEFT-HALF OVERLAY — dark on left 50%, clear on right ── */}
      <div className="absolute inset-0 z-10 pointer-events-none hero-overlay-container">
        {/* Dark left half that covers the text area */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(5,8,22,0.93) 0%, rgba(5,8,22,0.88) 20%, rgba(5,8,22,0.72) 38%, rgba(5,8,22,0.35) 50%, rgba(5,8,22,0.10) 58%, transparent 65%)",
          }}
        />
        {/* Thin top strip for navbar readability */}
        <div
          className="absolute top-0 left-0 right-0 h-20"
          style={{
            background: "linear-gradient(to bottom, rgba(5,8,22,0.4) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* ── CONTENT — vertically centered, left half of screen ── */}
      <motion.div
        className="relative z-20 w-full min-h-screen flex items-center"
        style={{
          y: contentY,
          opacity: contentOp,
          rotateX: tiltX,
          rotateY: tiltY,
          transformPerspective: 900,
          paddingTop: "120px",
        }}
      >
        <div className="container">
          {/* Left half container — takes exactly 50% on desktop */}
          <div className="w-full lg:w-1/2" style={{ paddingTop: "0px", paddingBottom: "80px" }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left mobile-text-card"
          >

            {/* Badge */}
            <motion.div
              variants={fade}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-14 transition-all duration-300 hover:scale-105 hover:border-[var(--accent-secondary)]/50 cursor-pointer hero-badge-el"
              style={{
                background: "linear-gradient(90deg, rgba(255,107,53,0.18) 0%, rgba(255,107,53,0.05) 100%)",
                border: "1px solid rgba(255,107,53,0.3)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{
                  background: "var(--accent-primary)",
                  boxShadow: "0 0 10px var(--accent-primary)",
                  animation: "pulse 2s infinite",
                }}
              />
              <Award size={14} style={{ color: "var(--accent-secondary)" }} />
              <span
                className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em]"
                style={{ color: "var(--accent-secondary)" }}
              >
                Greater Noida&apos;s Premier Fitness Coach
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fade}
              className="font-black tracking-tight leading-[1.05] hero-title-el"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4.4rem)",
                fontFamily: "var(--font-outfit), sans-serif",
              }}
            >
              <span
                className="block text-white uppercase transition-all duration-300 hover:translate-x-1.5 cursor-default"
                style={{ textShadow: "0 4px 20px rgba(0,0,0,0.6)" }}
              >
                Transform Your <span className="inline-block transition-all duration-300 hover:scale-110 hover:rotate-1" style={{ color: "var(--accent-primary)" }}>Body</span>
              </span>
              <span 
                className="block uppercase transition-all duration-500 hover:text-white hover:translate-x-1.5 cursor-default"
                style={{
                  marginTop: "0",
                  WebkitTextStroke: "1.5px rgba(255,255,255,0.8)",
                  color: "transparent",
                  textShadow: "none",
                }}
              >
                Elevate Your Life.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fade}
              className="leading-relaxed max-w-xl mx-auto lg:mx-0 hero-subtitle-el"
              style={{
                marginTop: "28px",
                marginBottom: "36px",
                fontSize: "clamp(0.95rem, 1.2vw, 1.15rem)",
                color: "var(--text-secondary)",
                textShadow: "0 1px 8px rgba(0,0,0,0.5)",
              }}
            >
              Certified Personal Trainer &amp; Athletic Coach. Specialising in{" "}
              <strong className="text-white font-semibold transition-all duration-300 hover:text-[var(--accent-primary)] hover:scale-105 inline-block cursor-default">Fat Loss</strong>,{" "}
              <strong className="text-white font-semibold transition-all duration-300 hover:text-[var(--accent-primary)] hover:scale-105 inline-block cursor-default">Muscle Gain</strong>,{" "}
              <strong className="text-white font-semibold transition-all duration-300 hover:text-[var(--accent-primary)] hover:scale-105 inline-block cursor-default">Gymnastics</strong>, and{" "}
              <strong className="text-white font-semibold transition-all duration-300 hover:text-[var(--accent-primary)] hover:scale-105 inline-block cursor-default">Therapeutic Recovery</strong>.
              Delivering real, sustainable results for over{" "}
              <span style={{ color: "var(--accent-secondary)" }} className="font-bold transition-all duration-300 hover:scale-105 inline-block cursor-default">8+ years</span>.
            </motion.p>

            {/* CTA Row */}
            <motion.div variants={fade} className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 hero-ctas-el" style={{ marginBottom: "36px" }}>
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, "#contact")}
                id="heroCtaPrimary"
                className="group inline-flex items-center justify-center gap-2.5 font-extrabold text-white uppercase tracking-wider transition-all duration-300 hover:scale-[1.03] hero-btn-primary"
                style={{
                  background: "var(--accent-gradient)",
                  boxShadow: "0 6px 20px rgba(255,107,53,0.3)",
                  padding: "10px 24px",
                  borderRadius: "50px",
                  fontSize: "13px",
                  letterSpacing: "0.05em",
                }}
              >
                <span>Start Your Journey</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#about"
                onClick={(e) => scrollTo(e, "#about")}
                id="heroCtaSecondary"
                className="group inline-flex items-center justify-center gap-2 font-bold text-white uppercase tracking-wider transition-all duration-300 hover:scale-[1.03] hero-btn-secondary"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  padding: "9px 24px",
                  borderRadius: "50px",
                  fontSize: "13px",
                  letterSpacing: "0.05em",
                }}
              >
                <span>Learn More</span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fade}
              className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 hero-stats-el"
              style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px" }}
            >
              <Counter target={500}  suffix="+" label="Clients"  />
              <div className="w-px h-5" style={{ background: "rgba(255,255,255,0.12)" }} />
              <Counter target={1000} suffix="+" label="Sessions" />
              <div className="w-px h-5" style={{ background: "rgba(255,255,255,0.12)" }} />
              <Counter target={8}    suffix="+" label="Years"    />
            </motion.div>

          </motion.div>
        </div>
      </div>
    </motion.div>

      {/* ── SCROLL CUE ── */}
      <motion.a
        href="#about"
        onClick={(e) => scrollTo(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#about")}
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.12], [0.5, 0]) }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-white/40" />
        </motion.div>
      </motion.a>
    </section>
  );
}

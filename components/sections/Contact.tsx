"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { SITE } from "@/lib/constants";
import { RevealWrapper } from "@/components/ui/RevealWrapper";

interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string;
  goal: string;
  message: string;
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "20px", height: "20px" }}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export function Contact() {
  const [showToast, setShowToast] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      goal: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setIsRedirecting(true);

    const goalLabels: Record<string, string> = {
      "weight-loss": "Weight Loss / Fat Loss",
      "muscle-building": "Muscle Building",
      athletic: "Athletic Performance",
      strength: "Strength & Conditioning",
      nutrition: "Nutrition & Lifestyle",
      personal: "General Personal Training",
    };

    // Build WhatsApp message
    const waText = [
      `👋 Hi Aneesh! I found you through your website.`,
      ``,
      `*Name:* ${data.firstName} ${data.lastName}`,
      `*Phone:* ${data.phone}`,
      `*Goal:* ${goalLabels[data.goal] || data.goal}`,
      data.message ? `*Message:* ${data.message}` : "",
      ``,
      `I'd love to book a free consultation! 💪`,
    ]
      .filter((line) => line !== "")
      .join("\n");

    setTimeout(() => {
      // Open WhatsApp with pre-filled message to Aneesh's number
      const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, "_blank");

      setIsRedirecting(false);
      reset();

      // Show toast
      setShowToast(true);
    }, 1000);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 4500);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <RevealWrapper className="section-header">
          <div className="section-tag">Contact</div>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-sub">
            Ready to transform? Reach out and let&apos;s build your plan together.
          </p>
        </RevealWrapper>

        <div className="contact-grid">
          {/* Info */}
          <RevealWrapper className="contact-info">
            <h3>Get In Touch</h3>
            <p>Based in Greater Noida, serving clients across NCR. Online coaching available worldwide.</p>
            <div className="contact-items">
              {/* WhatsApp */}
              <div className="contact-item" id="contactWhatsapp">
                <div className="contact-icon whatsapp-icon">
                  <WhatsAppIcon />
                </div>
                <div className="contact-detail">
                  <span className="contact-label">WhatsApp</span>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    +91 93502 81197
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item" id="contactEmail">
                <div className="contact-icon" style={{ background: "rgba(255,107,53,0.1)", color: "var(--accent-primary)" }}>
                  <MailIcon />
                </div>
                <div className="contact-detail">
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${SITE.email}`} className="contact-value">
                    {SITE.email}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="contact-item" id="contactInstagram">
                <div className="contact-icon instagram-icon">
                  <InstagramIcon />
                </div>
                <div className="contact-detail">
                  <span className="contact-label">Instagram</span>
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    {SITE.instagramHandle}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact-item" id="contactLocation">
                <div className="contact-icon location-icon">
                  <MapPinIcon />
                </div>
                <div className="contact-detail">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Greater Noida, Uttar Pradesh</span>
                </div>
              </div>
            </div>
          </RevealWrapper>

          {/* Form */}
          <RevealWrapper className="contact-form">
            <form onSubmit={handleSubmit(onSubmit)} id="contactForm">
              <h3>Book a Free Session</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Your first name"
                    {...register("firstName", { required: true })}
                    style={{ borderColor: errors.firstName ? "red" : "" }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Your last name"
                    {...register("lastName", { required: true })}
                    style={{ borderColor: errors.lastName ? "red" : "" }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+91 XXXXX XXXXX"
                  {...register("phone", { required: true })}
                  style={{ borderColor: errors.phone ? "red" : "" }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="goal">Your Primary Goal</label>
                <select
                  id="goal"
                  {...register("goal", { required: true })}
                  style={{ borderColor: errors.goal ? "red" : "" }}
                >
                  <option value="" disabled>
                    Select your goal
                  </option>
                  <option value="weight-loss">Weight Loss / Fat Loss</option>
                  <option value="muscle-building">Muscle Building</option>
                  <option value="athletic">Athletic Performance</option>
                  <option value="strength">Strength &amp; Conditioning</option>
                  <option value="nutrition">Nutrition &amp; Lifestyle</option>
                  <option value="personal">General Personal Training</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your goals, current fitness level, or any questions..."
                  {...register("message")}
                />
              </div>
              <button
                type="submit"
                disabled={isRedirecting}
                className="btn btn-primary btn-full"
                id="formSubmitBtn"
                style={{ opacity: isRedirecting ? 0.8 : 1 }}
              >
                {isRedirecting ? (
                  <>
                    <svg
                      className="spin"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{
                        width: "18px",
                        height: "18px",
                        marginRight: "10px",
                        animation: "spin 1s linear infinite",
                      }}
                    >
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    <span>Opening WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "18px", height: "18px", marginLeft: "10px" }}>
                      <path d="M22 2L11 13" />
                      <path d="M22 2L15 22 11 13 2 9l20-7z" />
                    </svg>
                  </>
                )}
              </button>
              <p className="form-note">I typically respond within 2 hours. Your first session is completely free!</p>
            </form>
          </RevealWrapper>
        </div>
      </div>

      {/* Success Toast */}
      <div className={`toast ${showToast ? "show" : ""}`} id="successToast">
        <CheckIcon />
        <span>Message sent successfully to WhatsApp!</span>
      </div>

      {/* Inline styles for spinner keyframes */}
      <style jsx global>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}

"use client";

import Image from "next/image";
import { BLOG_POSTS, SITE } from "@/lib/constants";
import { RevealWrapper } from "@/components/ui/RevealWrapper";

export function Blog() {
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

  const getWhatsAppUrl = (title: string) => {
    return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
      `Hi Aneesh! I read your article "${title}" and want to know more about it.`
    )}`;
  };

  return (
    <section className="blog section" id="blog">
      <div className="container">
        <RevealWrapper className="section-header">
          <div className="section-tag">Fitness Blog</div>
          <h2 className="section-title">
            Tips, Insights &amp; <span className="gradient-text">Transformation Guides</span>
          </h2>
          <p className="section-sub">
            Free fitness knowledge from 8+ years of real-world experience in Greater Noida
          </p>
        </RevealWrapper>

        <div className="blog-grid">
          {BLOG_POSTS.map((post, idx) => (
            <RevealWrapper
              key={post.id}
              className="blog-card"
              delay={idx * 80}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Image Wrap */}
              <div className="blog-img-wrap">
                <div className="relative w-full h-full">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="blog-category">{post.category}</div>
              </div>

              {/* Content */}
              <div className="blog-content" style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div className="blog-meta">
                    <span className="blog-date">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{ width: "13px", height: "13px", marginRight: "6px" }}
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {post.date}
                    </span>
                    <span className="blog-read">{post.readTime}</span>
                  </div>
                  <h3 className="blog-title" style={{ marginTop: "10px" }}>{post.title}</h3>
                  <p className="blog-excerpt" style={{ marginTop: "10px" }}>{post.excerpt}</p>
                </div>
                <a
                  href={getWhatsAppUrl(post.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-link"
                  style={{ marginTop: "16px" }}
                >
                  Read More
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

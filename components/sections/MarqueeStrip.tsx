import React from "react";

export function MarqueeStrip() {
  const items = [
    "Personal Training",
    "Athletic Performance",
    "Strength & Conditioning",
    "Fat Loss",
    "Muscle Building",
    "Nutrition Coaching",
  ];

  // Repeat items for seamless marquee loop
  const doubled = [...items, ...items];

  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {doubled.map((item, idx) => (
          <React.Fragment key={idx}>
            <span>{item}</span>
            <span className="marquee-dot">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}


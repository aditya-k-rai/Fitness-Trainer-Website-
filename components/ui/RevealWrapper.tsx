"use client";

import { useEffect, useRef, useState, ReactNode, forwardRef } from "react";

interface RevealWrapperProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  onMouseMove?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

export const RevealWrapper = forwardRef<HTMLDivElement, RevealWrapperProps>(
  ({ children, delay = 0, className = "", style, onMouseMove, onMouseLeave }, forwardedRef) => {
    const localRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const targetElement = localRef.current;
      if (!targetElement) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -60px 0px",
        }
      );

      observer.observe(targetElement);

      return () => observer.disconnect();
    }, [delay]);

    const setRef = (node: HTMLDivElement | null) => {
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
      localRef.current = node;
    };

    return (
      <div
        ref={setRef}
        className={`reveal ${isVisible ? "visible" : ""} ${className}`}
        style={style}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </div>
    );
  }
);

RevealWrapper.displayName = "RevealWrapper";

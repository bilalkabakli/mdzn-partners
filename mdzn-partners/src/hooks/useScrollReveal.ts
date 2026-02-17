"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

interface UseScrollRevealOptions {
  /** Intersection threshold (0–1). Default 0.15 */
  threshold?: number;
  /** Root margin passed to IntersectionObserver. Default "0px 0px -60px 0px" */
  rootMargin?: string;
  /** Only trigger once. Default true */
  triggerOnce?: boolean;
}

/**
 * Hook that observes an element's visibility via IntersectionObserver
 * and returns a ref + `isVisible` boolean for fade-in-up animations.
 *
 * Usage:
 * ```tsx
 * const { ref, isVisible } = useScrollReveal();
 * <div ref={ref} className={isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"}>
 * ```
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {},
): { ref: RefObject<T | null>; isVisible: boolean } {
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px", triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(node);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

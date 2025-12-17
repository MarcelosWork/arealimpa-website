"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  className = "",
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          ...directions[direction],
        },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
        },
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

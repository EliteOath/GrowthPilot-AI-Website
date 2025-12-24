import { Variants } from "framer-motion";

// Fade in from bottom - for primary hero content
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      type: "spring",
      stiffness: 60,
      damping: 20,
    },
  },
};

// Fade in from left - for alternating content sections
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.0,
      type: "spring",
      stiffness: 50,
      damping: 18,
    },
  },
};

// Fade in from right - for alternating content sections
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.0,
      type: "spring",
      stiffness: 50,
      damping: 18,
    },
  },
};

// Scale up fade in - for cards and featured content
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  },
};

// Rotate and scale in - for icons and special elements
export const rotateScaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.0,
      type: "spring",
      stiffness: 60,
      damping: 18,
    },
  },
};

// Slide from top - for headers and navigation
export const slideDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  },
};

// Stagger container - for lists and grids with varied timing
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Fast stagger for dense content
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

// Slow stagger for premium feel
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.4,
    },
  },
};

// Number counter animation
export const counterAnimation = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 100,
    },
  },
};

// Floating animation for background elements
export const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
  },
};

// Pulse animation for CTAs
export const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2.5,
    repeat: Infinity,
  },
};

// Blur fade in - for sophisticated entrance
export const blurFadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
    },
  },
};

// Diagonal slide in from bottom-left
export const slideInBottomLeft: Variants = {
  hidden: { opacity: 0, x: -60, y: 60 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1.0,
      type: "spring",
      stiffness: 55,
      damping: 20,
    },
  },
};

// Diagonal slide in from bottom-right
export const slideInBottomRight: Variants = {
  hidden: { opacity: 0, x: 60, y: 60 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1.0,
      type: "spring",
      stiffness: 55,
      damping: 20,
    },
  },
};

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideUpImmediateProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function SlideUpImmediate({ children, delay = 0, duration = 0.7, className = "" }: SlideUpImmediateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInImmediateProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeInImmediate({ children, delay = 0, duration = 0.6, className = "" }: FadeInImmediateProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

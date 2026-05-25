'use client';

import { motion } from 'framer-motion';

export default function AnimationTest() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="p-4 bg-red-500 text-white"
    >
      ANIMATION TEST - If you see this smoothly fade in, framer-motion works
    </motion.div>
  );
}

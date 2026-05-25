'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';

interface StatItemProps {
  value: string;
  label: string;
}

const statVariants = {
  rest: { borderColor: 'rgba(255, 255, 255, 0.1)' },
  hover: { borderColor: 'rgba(216, 155, 32, 0.3)', scale: 1.02 }
};

export default function StatItem({ value, label }: StatItemProps) {
  const getNum = (val: string): { num: number; suffix: string } => {
    if (val === '10+') return { num: 10, suffix: '+' };
    if (val === '50K+') return { num: 50, suffix: 'K+' };
    if (val === '30+') return { num: 30, suffix: '+' };
    if (val === '100%') return { num: 100, suffix: '%' };
    return { num: 0, suffix: val };
  };

  const { num, suffix } = getNum(value);

  return (
    <motion.div
      className="flex flex-col items-center text-center p-4 border bg-[#111513]/60 backdrop-blur-sm"
      variants={statVariants}
      initial="rest"
      whileHover="hover"
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="font-display text-3xl lg:text-4xl font-bold text-[#D89B20] mb-2"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
      >
        <CountUp end={num} duration={2} enableScrollSpy scrollSpyOnce suffix={suffix} />
      </motion.div>
      <motion.div
        className="font-display text-xs lg:text-sm text-[#A8ADA8] uppercase tracking-wide leading-tight"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}

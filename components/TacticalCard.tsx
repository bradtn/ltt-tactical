'use client';

import { motion } from 'framer-motion';

interface TacticalCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const cardVariants = {
  rest: { y: 0, borderColor: 'rgba(255, 255, 255, 0.1)' },
  hover: { y: -4, borderColor: 'rgba(216, 155, 32, 0.5)' }
};

const bgVariants = {
  rest: { opacity: 0.2, scale: 1 },
  hover: { opacity: 0.35, scale: 1.05 }
};

const cornerVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1 }
};

const iconVariants = {
  rest: { borderColor: 'rgba(255, 255, 255, 0.2)', scale: 1 },
  hover: { borderColor: 'rgba(216, 155, 32, 0.5)', scale: 1.1 }
};

const arrowVariants = {
  rest: { x: 0 },
  hover: { x: 4 }
};

export default function TacticalCard({ title, description, image, icon }: TacticalCardProps) {
  return (
    <motion.div
      className="relative h-[240px] overflow-hidden border bg-[#111513] cursor-pointer"
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        variants={bgVariants}
        transition={{ duration: 0.4 }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050605] via-[#050605]/80 to-transparent" />

      {/* Corner Brackets */}
      <motion.div
        className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[#D89B20]/50"
        variants={cornerVariants}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-[#D89B20]/50"
        variants={cornerVariants}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-[#D89B20]/50"
        variants={cornerVariants}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-[#D89B20]/50"
        variants={cornerVariants}
        transition={{ duration: 0.2 }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col p-3 md:p-5">
        {/* Icon - Fixed position from top */}
        <motion.div
          className="mb-2 md:mb-4 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center border bg-[#111513]/80"
          variants={iconVariants}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className="font-display text-base md:text-xl font-bold uppercase tracking-tight text-[#F2F2EA] mb-1 md:mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="font-body text-xs md:text-sm text-[#A8ADA8] leading-relaxed mb-2 md:mb-3">
          {description}
        </p>

        {/* Spacer to push arrow to bottom */}
        <div className="flex-1" />

        {/* Arrow */}
        <div className="flex items-center gap-1 md:gap-2 text-[#D89B20]">
          <span className="font-display text-[10px] md:text-xs font-semibold uppercase tracking-wider">Learn More</span>
          <motion.svg
            className="h-3 w-3 md:h-4 md:w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            variants={arrowVariants}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </motion.svg>
        </div>
      </div>
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';
import FadeInView from './animations/FadeInView';
import SlideUpView from './animations/SlideUpView';

const iconVariants = {
  rest: {
    borderColor: 'rgba(255, 255, 255, 0.1)',
    scale: 1
  },
  hover: {
    borderColor: 'rgba(216, 155, 32, 0.5)',
    scale: 1.1
  }
};

const svgVariants = {
  rest: { color: '#55624A' },
  hover: { color: '#D89B20' }
};

const textVariants = {
  rest: { color: '#A8ADA8' },
  hover: { color: '#F2F2EA' }
};

export default function TrustStrip() {
  const agencies = [
    'Canada Border Services Agency',
    'Global Affairs Canada',
    'Immigration, Refugees and Citizenship Canada',
    'Canadian Food Inspection Agency',
  ];

  return (
    <section className="relative w-full border-b border-white/10 bg-[#080A09]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-5 lg:py-6">
        <div className="flex flex-col items-center gap-6">
          {/* Label */}
          <FadeInView>
            <div className="flex items-center gap-3">
              <motion.div
                className="h-[1px] w-8 bg-[#D89B20]"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <p className="text-[10px] lg:text-xs font-semibold uppercase tracking-widest text-[#D89B20]">
                Trusted by Government of Canada Agencies
              </p>
              <motion.div
                className="h-[1px] w-8 bg-[#D89B20]"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </div>
          </FadeInView>

          {/* Agencies Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full max-w-5xl">
            {agencies.map((agency, index) => (
              <SlideUpView key={index} delay={0.1 + index * 0.1}>
                <motion.div
                  className="flex flex-col items-center gap-3 cursor-pointer"
                  initial="rest"
                  whileHover="hover"
                >
                  {/* Icon/Crest Placeholder */}
                  <motion.div
                    className="relative flex h-12 w-12 items-center justify-center border bg-[#111513]"
                    variants={iconVariants}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <motion.svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      variants={svgVariants}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                      />
                    </motion.svg>
                    {/* Corner brackets */}
                    <div className="absolute top-0 left-0 h-2 w-2 border-t border-l border-[#D89B20]/30" />
                    <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-[#D89B20]/30" />
                    <div className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-[#D89B20]/30" />
                    <div className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-[#D89B20]/30" />
                  </motion.div>

                  {/* Agency Name */}
                  <motion.p
                    className="text-[10px] lg:text-xs text-center leading-tight uppercase tracking-wide font-medium"
                    variants={textVariants}
                    transition={{ duration: 0.2 }}
                  >
                    {agency}
                  </motion.p>
                </motion.div>
              </SlideUpView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

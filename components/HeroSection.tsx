'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeInView from './animations/FadeInView';
import SlideUpView from './animations/SlideUpView';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contourY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative w-full h-[620px] md:h-[750px] lg:h-[900px] xl:h-screen overflow-hidden border-b border-white/10">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0D0C] to-[#111513]">
        <motion.div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: 'url(/images/hero-desktop.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: backgroundY,
          }}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050605]/95 via-[#050605]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050605]/70 via-transparent to-transparent" />

      {/* Contour Lines SVG with Parallax */}
      <motion.svg
        className="absolute right-0 top-0 h-full w-1/3 opacity-10 hidden lg:block"
        viewBox="0 0 400 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ y: contourY }}
      >
        <motion.path
          d="M50 100 Q 150 150, 250 100 T 450 100"
          stroke="#55624A"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M30 200 Q 130 250, 230 200 T 430 200"
          stroke="#55624A"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.7, ease: "easeInOut" }}
        />
        <motion.path
          d="M60 300 Q 160 350, 260 300 T 460 300"
          stroke="#55624A"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.9, ease: "easeInOut" }}
        />
        <motion.path
          d="M40 400 Q 140 450, 240 400 T 440 400"
          stroke="#55624A"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.1, ease: "easeInOut" }}
        />
        <motion.path
          d="M70 500 Q 170 550, 270 500 T 470 500"
          stroke="#55624A"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.3, ease: "easeInOut" }}
        />
        <motion.path
          d="M50 600 Q 150 650, 250 600 T 450 600"
          stroke="#55624A"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
        />
      </motion.svg>

      {/* Content Container */}
      <motion.div
        className="relative h-full mx-auto max-w-[1440px] px-6 lg:px-12 z-10"
        style={{ opacity: contentOpacity }}
      >
        <div className="flex h-full items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
            {/* Left Content */}
            <div className="lg:col-span-7 pt-28 pb-10 lg:pt-0 flex flex-col justify-center relative z-20">
              <FadeInView delay={0.1}>
                <div className="mb-6">
                  <div className="inline-block px-4 py-2 border border-[#D89B20]/30 bg-[#D89B20]/5">
                    <span className="font-display text-xs font-semibold uppercase tracking-widest text-[#D89B20]">
                      STRATEGIC THINKING. PRACTICAL SOLUTIONS.
                    </span>
                  </div>
                </div>
              </FadeInView>

              <SlideUpView delay={0.2}>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold uppercase tracking-tighter leading-[0.95] text-[#F2F2EA] mb-8">
                  PREPARE WITH<br />PURPOSE.<br />PROTECT WHAT<br />MATTERS.
                </h1>
              </SlideUpView>

              <FadeInView delay={0.4}>
                <p className="font-body text-base lg:text-lg text-[#A8ADA8] leading-relaxed mb-10 max-w-xl">
                  Strategic consulting and practical training for individuals, families, and organizations seeking real-world safety, awareness, and confidence.
                </p>
              </FadeInView>

              <SlideUpView delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <motion.button
                    className="font-body flex items-center justify-center px-8 py-4 bg-[#D89B20] text-[#050605] font-semibold text-sm uppercase tracking-wide whitespace-nowrap sm:w-auto"
                    whileHover={{ scale: 1.05, backgroundColor: '#c78b1a' }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    Our Services
                  </motion.button>
                  <motion.button
                    className="font-body flex items-center justify-center px-8 py-4 border border-white/30 text-[#F2F2EA] font-semibold text-sm uppercase tracking-wide whitespace-nowrap sm:w-auto"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    Training Programs
                  </motion.button>
                </div>
              </SlideUpView>
            </div>

            {/* Right side - Image area (handled by absolute background) */}
            <div className="hidden lg:block lg:col-span-5" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

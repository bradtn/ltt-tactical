'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import StatItem from './StatItem';
import FadeInView from './animations/FadeInView';
import SlideUpView from './animations/SlideUpView';

export default function ExperienceBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  const stats = [
    { value: '10+', label: 'Years In Operation' },
    { value: '50K+', label: 'Students Trained Worldwide' },
    { value: '30+', label: 'Countries Global Experience' },
    { value: '100%', label: 'Veteran Owned Mission Driven' },
  ];

  return (
    <section ref={sectionRef} className="relative w-full border-b border-white/10 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(/images/mountain-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D0C] via-[#0A0D0C]/95 to-[#0A0D0C]" />

      {/* Content */}
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12 py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Main Text */}
          <div className="lg:col-span-4">
            <SlideUpView>
              <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#F2F2EA] mb-4 lg:mb-6 leading-tight">
                WE EMPOWER<br />GOOD PEOPLE<br />TO MAKE SMART<br />DECISIONS.
              </h2>
            </SlideUpView>

            <FadeInView delay={0.2}>
              <p className="font-body text-sm lg:text-base text-[#A8ADA8] leading-relaxed mb-6">
                Whether you're protecting your family, leading a team, or navigating unfamiliar situations, we provide practical strategies, training, and mindset development to help you stay prepared and confident.
              </p>
            </FadeInView>

            <SlideUpView delay={0.3}>
              <motion.button
                className="font-body inline-block px-6 py-4 border border-[#D89B20] text-[#D89B20] text-sm font-semibold uppercase tracking-wide whitespace-nowrap"
                whileHover={{ backgroundColor: '#D89B20', color: '#050605', scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                About LTT Tactical
              </motion.button>
            </SlideUpView>
          </div>

          {/* Middle: Stats Grid */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <SlideUpView key={index} delay={0.1 + index * 0.1}>
                  <StatItem value={stat.value} label={stat.label} />
                </SlideUpView>
              ))}
            </div>
          </div>

          {/* Right: Instructor Promo Card */}
          <div className="lg:col-span-4">
            <FadeInView delay={0.3}>
              <div className="relative h-full min-h-[320px] lg:min-h-[400px] overflow-hidden border border-white/10 bg-[#111513]">
                {/* Background Image */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage: 'url(/images/instructor.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050605] via-[#050605]/80 to-transparent" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
                  <div className="mb-3">
                    <div className="inline-block px-3 py-1 bg-[#D89B20]/20 border border-[#D89B20]/50 mb-4">
                      <span className="font-display text-xs font-semibold uppercase tracking-widest text-[#D89B20]">
                        Our Team
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl lg:text-3xl font-bold uppercase tracking-tight text-[#F2F2EA] mb-3">
                    MEET OUR<br />INSTRUCTORS
                  </h3>

                  <p className="font-body text-sm text-[#A8ADA8] leading-relaxed mb-6">
                    Trusted advisors. Experienced professionals. Committed to your security.
                  </p>

                  <motion.button
                    className="inline-flex items-center gap-2 text-[#D89B20]"
                    whileHover="hover"
                    initial="rest"
                  >
                    <span className="font-body text-sm font-semibold uppercase tracking-wider">Meet The Team</span>
                    <motion.svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      variants={{
                        rest: { x: 0 },
                        hover: { x: 4 }
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </motion.button>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  );
}

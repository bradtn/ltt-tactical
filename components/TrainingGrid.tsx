'use client';

import TacticalCard from './TacticalCard';
import FadeInView from './animations/FadeInView';
import SlideUpView from './animations/SlideUpView';

export default function TrainingGrid() {
  const trainings = [
    {
      title: 'Strategic Consulting',
      description: 'Professional security advisory and risk assessment for organizations and executives.',
      image: '/images/training-corporate.jpg',
      icon: (
        <svg className="h-5 w-5 text-[#D89B20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Family Security',
      description: 'Comprehensive protection strategies for your family and home environment.',
      image: '/images/training-home-security.jpg',
      icon: (
        <svg className="h-5 w-5 text-[#D89B20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: 'Individual Training',
      description: 'Personal safety, situational awareness, and confidence-building programs.',
      image: '/images/training-personal-safety.jpg',
      icon: (
        <svg className="h-5 w-5 text-[#D89B20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: 'De-escalation Training',
      description: 'Proven techniques to defuse conflict and prevent violence before it escalates.',
      image: '/images/training-deescalation.jpg',
      icon: (
        <svg className="h-5 w-5 text-[#D89B20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full border-b border-white/10 bg-[#0A0D0C]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-8 lg:py-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <SlideUpView>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#D89B20] mb-3">
                Our Services
              </p>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-[#F2F2EA]">
                STRATEGIC SOLUTIONS.<br />PRACTICAL PROTECTION.
              </h2>
            </div>
          </SlideUpView>

          <FadeInView delay={0.2}>
            <p className="text-sm lg:text-base text-[#A8ADA8] leading-relaxed max-w-md">
              From individual preparedness to organizational resilience, we provide expert guidance and training tailored to your security needs.
            </p>
          </FadeInView>
        </div>

        {/* Cards Grid - Desktop: 4 columns, Tablet/Mobile: 2 columns */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
          {trainings.map((training, index) => (
            <SlideUpView key={index} delay={0.1 + index * 0.1}>
              <TacticalCard {...training} />
            </SlideUpView>
          ))}
        </div>
      </div>
    </section>
  );
}

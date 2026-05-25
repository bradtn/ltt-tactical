import { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function HeroHeading({ children, className = '' }: TypographyProps) {
  return (
    <h1
      className={`font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold uppercase leading-none tracking-tight text-tactical-text ${className}`}
    >
      {children}
    </h1>
  );
}

export function SectionHeading({ children, className = '' }: TypographyProps) {
  return (
    <h2
      className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-wide text-tactical-text ${className}`}
    >
      {children}
    </h2>
  );
}

export function SubHeading({ children, className = '' }: TypographyProps) {
  return (
    <h3
      className={`font-display text-2xl md:text-3xl font-bold uppercase leading-tight tracking-wide text-tactical-text ${className}`}
    >
      {children}
    </h3>
  );
}

export function TacticalLabel({ children, className = '' }: TypographyProps) {
  return (
    <span
      className={`font-display text-xs md:text-sm font-semibold uppercase tracking-widest text-tactical-amber ${className}`}
    >
      {children}
    </span>
  );
}

export function StatNumber({ children, className = '' }: TypographyProps) {
  return (
    <span
      className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold tabular-nums leading-none text-tactical-text ${className}`}
    >
      {children}
    </span>
  );
}

export function BodyText({ children, className = '' }: TypographyProps) {
  return (
    <p
      className={`font-body text-base md:text-lg font-normal leading-relaxed text-tactical-muted ${className}`}
    >
      {children}
    </p>
  );
}

export function BodyTextSmall({ children, className = '' }: TypographyProps) {
  return (
    <p
      className={`font-body text-sm md:text-base font-normal leading-relaxed text-tactical-muted ${className}`}
    >
      {children}
    </p>
  );
}

export function NavText({ children, className = '' }: TypographyProps) {
  return (
    <span
      className={`font-body text-sm md:text-base font-medium tracking-wide text-tactical-text hover:text-tactical-amber transition-colors ${className}`}
    >
      {children}
    </span>
  );
}

export function ButtonText({ children, className = '' }: TypographyProps) {
  return (
    <span
      className={`font-body text-sm md:text-base font-medium tracking-wide uppercase ${className}`}
    >
      {children}
    </span>
  );
}

export function CardTitle({ children, className = '' }: TypographyProps) {
  return (
    <h4
      className={`font-display text-xl md:text-2xl font-bold uppercase leading-tight tracking-wide text-tactical-text ${className}`}
    >
      {children}
    </h4>
  );
}

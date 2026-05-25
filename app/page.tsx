import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustStrip from '@/components/TrustStrip';
import TrainingGrid from '@/components/TrainingGrid';
import ExperienceBand from '@/components/ExperienceBand';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050605]">
      <Header />
      <HeroSection />
      <TrustStrip />
      <TrainingGrid />
      <ExperienceBand />
    </main>
  );
}

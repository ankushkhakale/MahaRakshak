
import { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { InteractiveCharts } from '@/components/InteractiveCharts';
import { GovernmentData } from '@/components/GovernmentData';
import { GovernmentInitiatives } from '@/components/GovernmentInitiatives';
import { GovernmentGuidelines } from '@/components/GovernmentGuidelines';
import { ReportingSection } from '@/components/ReportingSection';
import { AboutSection } from '@/components/AboutSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'mr'>('en');

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <HeroSection language={language} />
        <StatsSection language={language} />
        <InteractiveCharts language={language} />
        <GovernmentData language={language} />
        <GovernmentInitiatives language={language} />
        <GovernmentGuidelines language={language} />
        <ReportingSection language={language} />
        <AboutSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Index;

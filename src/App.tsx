import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MissionVision } from './components/MissionVision';
import { Initiatives } from './components/Initiatives';
import { AnimatedMetrics } from './components/AnimatedMetrics';
import { ImpactCalculator } from './components/ImpactCalculator';
import { LinkedInUpdates } from './components/LinkedInUpdates';
import { LeadershipAndFAQ } from './components/LeadershipAndFAQ';
import { GetInvolvedModal } from './components/GetInvolvedModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [getInvolvedOpen, setGetInvolvedOpen] = useState<boolean>(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'mission', 'initiatives', 'impact', 'calculator', 'linkedin-feed', 'team'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToInitiatives = () => {
    const element = document.getElementById('initiatives');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900 flex flex-col relative">
      
      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenGetInvolved={() => setGetInvolvedOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero
          onOpenGetInvolved={() => setGetInvolvedOpen(true)}
          onExploreInitiatives={scrollToInitiatives}
        />

        {/* Purpose & Frameworks */}
        <MissionVision />

        {/* 5 Core Social Pillars */}
        <Initiatives 
          onOpenGetInvolved={() => setGetInvolvedOpen(true)} 
        />

        {/* Measurable Impact Metrics */}
        <AnimatedMetrics />

        {/* Calculated Support Multiplier */}
        <ImpactCalculator 
          onOpenGetInvolved={() => setGetInvolvedOpen(true)} 
        />

        {/* Field Dispatches & LinkedIn Updates */}
        <LinkedInUpdates />

        {/* Leadership & FAQ */}
        <LeadershipAndFAQ />

      </main>

      {/* Get Involved / Partner Popup Modal */}
      <GetInvolvedModal
        isOpen={getInvolvedOpen}
        onClose={() => setGetInvolvedOpen(false)}
      />

      {/* Clean Footer */}
      <Footer
        onOpenGetInvolved={() => setGetInvolvedOpen(true)}
      />

    </div>
  );
}

import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ExploreSection from "../components/ExploreSection";
import StroomCoinSection from "../components/StroomCoinSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'explore', 'stroomcoin', 'team', 'contact'];
      let currentSection = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in view (top of section is above middle of screen)
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navigation activeSection={activeSection} />
      <main>
        <HeroSection />
        <ExploreSection />
        <StroomCoinSection />
        <TeamSection />
        <ContactSection />
      </main>
    </div>
  );
}

import { useEffect, useState } from "react";
import { NavigationBar } from "./components/NavigationBar";
import { HeroSection } from "./components/HeroSection";
import { FloatingObjects } from "./components/FloatingObjects";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SpecialProjects } from "./components/SpecialProjects";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { TechStackSection } from "./components/TechStackSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { CursorGlow } from "./components/CursorGlow";
import { ScrollProgress } from "./components/ScrollProgress";
import { LoadingScreen } from "./components/LoadingScreen";
import { ParticleField } from "./components/ParticleField";
import { AICommandCenter } from "./components/AICommandCenter";
import { BackToTop } from "./components/BackToTop";
import { NeuralNetwork } from "./components/NeuralNetwork";
import Lenis from "@studio-freight/lenis";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <ScrollProgress />
      <CursorGlow />
      <NeuralNetwork />
      <ParticleField />
      <FloatingObjects />
      <NavigationBar />
      <AICommandCenter />
      <BackToTop />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SpecialProjects />
        <ProjectsSection />
        <WhyChooseSection />
        <TechStackSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
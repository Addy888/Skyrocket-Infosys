import { lazy, Suspense, useEffect, useState, memo } from "react";
import { NavigationBar } from "./components/NavigationBar";
import { HeroSection } from "./components/HeroSection";
import { LoadingScreen } from "./components/LoadingScreen";
import Lenis from "@studio-freight/lenis";

// Lazy load heavy components for better performance
const FloatingObjects = lazy(() => import("./components/FloatingObjects").then(m => ({ default: m.FloatingObjects })));
const AboutSection = lazy(() => import("./components/AboutSection").then(m => ({ default: m.AboutSection })));
const ServicesSection = lazy(() => import("./components/ServicesSection").then(m => ({ default: m.ServicesSection })));
const ProjectsSection = lazy(() => import("./components/ProjectsSection").then(m => ({ default: m.ProjectsSection })));
const SpecialProjects = lazy(() => import("./components/SpecialProjects").then(m => ({ default: m.SpecialProjects })));
const WhyChooseSection = lazy(() => import("./components/WhyChooseSection").then(m => ({ default: m.WhyChooseSection })));
const TechStackSection = lazy(() => import("./components/TechStackSection").then(m => ({ default: m.TechStackSection })));
const TestimonialsSection = lazy(() => import("./components/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const ContactSection = lazy(() => import("./components/ContactSection").then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));
const CursorGlow = lazy(() => import("./components/CursorGlow").then(m => ({ default: m.CursorGlow })));
const ScrollProgress = lazy(() => import("./components/ScrollProgress").then(m => ({ default: m.ScrollProgress })));
const ParticleField = lazy(() => import("./components/ParticleField").then(m => ({ default: m.ParticleField })));
const AICommandCenter = lazy(() => import("./components/AICommandCenter").then(m => ({ default: m.AICommandCenter })));
const BackToTop = lazy(() => import("./components/BackToTop").then(m => ({ default: m.BackToTop })));
const NeuralNetwork = lazy(() => import("./components/NeuralNetwork").then(m => ({ default: m.NeuralNetwork })));

// Lightweight fallback component
const ComponentFallback = memo(() => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
));

ComponentFallback.displayName = "ComponentFallback";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showHeavyEffects, setShowHeavyEffects] = useState(false);

  useEffect(() => {
    // Initialize smooth scroll only after loading complete
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

      const rafId = requestAnimationFrame(raf);

      // Delay heavy effects to improve initial render
      const timer = setTimeout(() => {
        setShowHeavyEffects(true);
      }, 500);

      return () => {
        lenis.destroy();
        cancelAnimationFrame(rafId);
        clearTimeout(timer);
      };
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Critical above-the-fold components */}
      <Suspense fallback={null}>
        <ScrollProgress />
      </Suspense>
      
      <NavigationBar />
      
      {/* Load heavy visual effects after initial render */}
      {showHeavyEffects && (
        <Suspense fallback={null}>
          <CursorGlow />
          <NeuralNetwork />
          <ParticleField />
          <FloatingObjects />
        </Suspense>
      )}

      <main>
        <HeroSection />
        
        <Suspense fallback={<ComponentFallback />}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<ComponentFallback />}>
          <ServicesSection />
        </Suspense>
        
        <Suspense fallback={<ComponentFallback />}>
          <SpecialProjects />
        </Suspense>
        
        <Suspense fallback={<ComponentFallback />}>
          <ProjectsSection />
        </Suspense>
        
        <Suspense fallback={<ComponentFallback />}>
          <WhyChooseSection />
        </Suspense>
        
        <Suspense fallback={<ComponentFallback />}>
          <TechStackSection />
        </Suspense>
        
        <Suspense fallback={<ComponentFallback />}>
          <TestimonialsSection />
        </Suspense>
        
        <Suspense fallback={<ComponentFallback />}>
          <ContactSection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <AICommandCenter />
        <BackToTop />
      </Suspense>
    </div>
  );
}

export default memo(App);
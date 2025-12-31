import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CoursesMarquee } from "@/components/CoursesMarquee";
import { AboutSection } from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CoursesMarquee />
      <AboutSection />
    </div>
  );
};

export default Index;

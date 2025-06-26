
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectMarquee from "@/components/ProjectMarquee";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <ProjectMarquee />
    </div>
  );
};

export default Index;

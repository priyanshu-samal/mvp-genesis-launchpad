
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectMarquee from "@/components/ProjectMarquee";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <ProjectMarquee />
      <HeroSection />
    </div>
  );
};

export default Index;

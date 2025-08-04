import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectMarquee from "@/components/ProjectMarquee";
import WhyUsSection from "@/components/WhyUsSection";
import ProjectsShowcaseSection from "@/components/ProjectsShowcaseSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "../components/PricingSection";
import ContactSection from "@/components/ContactSection";
import DoubtsSection from "../components/DoubtsSection";
import Footer from "../components/Footer";
import Mainani from "../components/Mainani";

export default function Index() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <ProjectMarquee />
      <WhyUsSection />
      
      
      {/* <ProjectsShowcaseSection /> */}
      <TestimonialsSection />
      <PricingSection />
      <DoubtsSection />
      <Footer />
    </div>
  );
}

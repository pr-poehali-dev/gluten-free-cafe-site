import Header from "@/components/cafe/Header";
import HeroSection from "@/components/cafe/HeroSection";
import AboutSection from "@/components/cafe/AboutSection";
import MenuSection from "@/components/cafe/MenuSection";
import TestimonialsSection from "@/components/cafe/TestimonialsSection";
import ContactSection from "@/components/cafe/ContactSection";
import Footer from "@/components/cafe/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
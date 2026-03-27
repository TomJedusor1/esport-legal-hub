import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ServicesSection from "@/components/ServicesSection";
import EthicsSection from "@/components/EthicsSection";
import PricingSection from "@/components/PricingSection";
import RosterSection from "@/components/RosterSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ExpertiseSection />
    <ServicesSection />
    <EthicsSection />
    <PricingSection />
    <RosterSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;

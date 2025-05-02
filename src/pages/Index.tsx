
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ServiceTypes from "@/components/ServiceTypes";
import WasteStats from "@/components/WasteStats";
import CollectorHighlight from "@/components/CollectorHighlight";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <ServiceTypes />
        <WasteStats />
        <CollectorHighlight />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

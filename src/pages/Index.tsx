
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ToolComparison from "@/components/ToolComparison";
import ROICalculator from "@/components/ROICalculator";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ToolComparison />
      <ROICalculator />
      <CaseStudies />
      <Footer />
    </div>
  );
};

export default Index;

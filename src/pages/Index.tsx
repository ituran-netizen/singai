import PremiumNavigation from "@/components/PremiumNavigation";
import PremiumHero from "@/components/PremiumHero";
import PremiumFeatures from "@/components/PremiumFeatures";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import SimpleFooter from "@/components/SimpleFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PremiumNavigation />
      <PremiumHero />
      <PremiumFeatures />
      <FAQ />
      <Contact />
      <SimpleFooter />
    </div>
  );
};

export default Index;

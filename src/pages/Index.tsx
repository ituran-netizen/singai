import Navigation from "@/components/Navigation";
import SimpleHero from "@/components/SimpleHero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import SimpleFooter from "@/components/SimpleFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SimpleHero />
      <Features />
      <FAQ />
      <Contact />
      <SimpleFooter />
    </div>
  );
};

export default Index;

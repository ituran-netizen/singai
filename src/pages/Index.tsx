import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Community from "@/components/Community";
import AppShowcase from "@/components/AppShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Community />
      <AppShowcase />
      <Footer />
    </div>
  );
};

export default Index;

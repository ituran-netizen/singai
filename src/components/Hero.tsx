import { Button } from "@/components/ui/button";
import { Play, Download, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import floatingAlbums from "@/assets/floating-albums.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Floating Albums Animation */}
      <div className="absolute right-10 top-20 opacity-40 float-animation">
        <img 
          src={floatingAlbums} 
          alt="Floating album covers" 
          className="w-96 h-72 object-contain rotate-slow"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* AI Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 pulse-glow">
          <Sparkles size={16} className="text-primary-glow" />
          <span className="text-sm font-medium text-primary-glow">Powered by Advanced AI</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          🎶 Your Voice. Your Music.{" "}
          <span className="text-gradient">Powered by AI.</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Create, Cover, and Remix songs instantly — no experience needed.
          Join millions of creators making music with cutting-edge AI technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:scale-105 transition-all duration-300 glow-primary text-lg px-8 py-4 h-auto"
          >
            <Play size={20} className="mr-2" />
            Try Free – 5 Daily Credits
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-secondary text-secondary hover:bg-secondary/10 hover:scale-105 transition-all duration-300 text-lg px-8 py-4 h-auto"
          >
            <Download size={20} className="mr-2" />
            Download App
          </Button>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-primary-glow mb-2">2M+</div>
            <div className="text-muted-foreground">Songs Created</div>
          </div>
          <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-secondary-glow mb-2">500K+</div>
            <div className="text-muted-foreground">Active Creators</div>
          </div>
          <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-accent mb-2">Royalty Free</div>
            <div className="text-muted-foreground">100% Ownership</div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-glow rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary-glow rounded-full animate-pulse opacity-80 animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent rounded-full animate-pulse opacity-40 animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default Hero;
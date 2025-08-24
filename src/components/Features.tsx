import { Button } from "@/components/ui/button";
import { Mic, Brain, Shuffle, Users, Sparkles, Music2, Zap, Star } from "lucide-react";
import voiceCloningImage from "@/assets/voice-cloning.jpg";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Song Generator",
      description: "Describe your song idea and watch AI create magic",
      details: "From mood to genre, instruments to vocals - just tell us what you want",
      color: "primary",
      status: "active"
    },
    {
      icon: Mic,
      title: "Voice Cloning Covers",
      description: "Any song. Any voice.",
      details: "Transform any track with AI-cloned voices of your favorite artists",
      color: "secondary",
      status: "active"
    },
    {
      icon: Shuffle,
      title: "Remix Mode",
      description: "Coming Soon",
      details: "AI-powered remixing tools for endless creative possibilities",
      color: "accent",
      status: "coming-soon"
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Share & Discover",
      details: "Join millions of creators in our TikTok-style music feed",
      color: "primary",
      status: "active"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background"></div>
      
      {/* Section Header */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Sparkles size={16} className="text-primary-glow" />
            <span className="text-sm font-medium text-primary-glow">Core Features</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Create Music</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From AI songwriting to voice cloning, remix tools to global sharing - 
            we've built the ultimate creative platform for the next generation of musicians.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="glass-card p-8 hover:scale-105 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Coming Soon Badge */}
              {feature.status === "coming-soon" && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-primary rounded-full text-xs font-medium">
                  Coming Soon
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${
                feature.color === 'primary' ? 'bg-primary/20 glow-primary' :
                feature.color === 'secondary' ? 'bg-secondary/20 glow-secondary' :
                'bg-accent/20'
              } group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={32} className={
                  feature.color === 'primary' ? 'text-primary-glow' :
                  feature.color === 'secondary' ? 'text-secondary-glow' :
                  'text-accent'
                } />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-lg text-muted-foreground mb-4">{feature.description}</p>
              <p className="text-sm opacity-80">{feature.details}</p>

              {/* Interactive Elements */}
              {feature.title === "AI Song Generator" && (
                <div className="mt-6 p-4 bg-primary/10 rounded-xl border border-primary/20">
                  <div className="flex items-center gap-2 text-sm text-primary-glow mb-2">
                    <Zap size={14} />
                    <span>Try it now</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    "Create a chill lo-fi track with jazz piano and rain sounds"
                  </div>
                </div>
              )}

              {feature.title === "Voice Cloning Covers" && (
                <div className="mt-6">
                  <img 
                    src={voiceCloningImage} 
                    alt="Voice cloning visualization" 
                    className="w-full h-32 object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
            <Music2 size={32} className="text-primary-glow mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Pro Quality</h4>
            <p className="text-sm text-muted-foreground">Studio-grade audio output with AI mastering</p>
          </div>
          
          <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
            <Zap size={32} className="text-secondary-glow mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Lightning Fast</h4>
            <p className="text-sm text-muted-foreground">Generate full songs in under 30 seconds</p>
          </div>
          
          <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
            <Star size={32} className="text-accent mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Royalty Free</h4>
            <p className="text-sm text-muted-foreground">Own your creations, monetize anywhere</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
import { Button } from "@/components/ui/button";
import { Download, Apple, Smartphone, Star, Zap } from "lucide-react";
import appMockupImage from "@/assets/app-mockup.jpg";

const AppShowcase = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Smartphone size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Mobile Experience</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Create Music{" "}
            <span className="text-gradient">Anywhere, Anytime</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the power of AI music creation on the go. Our mobile apps bring 
            the full studio experience to your pocket with intuitive touch controls.
          </p>
        </div>

        {/* App Features & Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Features List */}
          <div className="space-y-8">
            <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center glow-primary">
                  <Zap size={24} className="text-primary-glow" />
                </div>
                <h3 className="text-xl font-bold">Instant Creation</h3>
              </div>
              <p className="text-muted-foreground">
                Generate full songs in 30 seconds with our optimized mobile AI engine. 
                No wifi? No problem - works offline too.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center glow-secondary">
                  <Star size={24} className="text-secondary-glow" />
                </div>
                <h3 className="text-xl font-bold">Touch-Optimized</h3>
              </div>
              <p className="text-muted-foreground">
                Swipe, pinch, and tap your way to musical masterpieces. 
                Designed specifically for mobile creativity.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Download size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold">Cloud Sync</h3>
              </div>
              <p className="text-muted-foreground">
                Start on mobile, finish on desktop. All your projects sync 
                seamlessly across all your devices.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:scale-105 transition-all duration-300 glow-primary h-auto py-4"
              >
                <Apple size={20} className="mr-2" />
                Download for iOS
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-secondary text-secondary hover:bg-secondary/10 hover:scale-105 transition-all duration-300 h-auto py-4"
              >
                <Smartphone size={20} className="mr-2" />
                Get on Android
              </Button>
            </div>
          </div>

          {/* App Mockup */}
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              {/* Phone Frame Effect */}
              <div className="glass-card p-8 rounded-3xl glow-primary">
                <img 
                  src={appMockupImage} 
                  alt="Sing AI mobile app interface" 
                  className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-glow rounded-full animate-pulse opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-glow rounded-full animate-pulse opacity-80 animation-delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-accent rounded-full animate-pulse opacity-70 animation-delay-2000"></div>
            </div>
          </div>
        </div>

        {/* App Store Ratings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-2xl font-bold mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">App Store Rating</div>
          </div>
          
          <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-bold text-primary-glow mb-2">1M+</div>
            <div className="text-sm text-muted-foreground">Downloads</div>
          </div>
          
          <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-bold text-secondary-glow mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">5-Star Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
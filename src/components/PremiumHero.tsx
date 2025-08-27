import { Button } from "@/components/ui/button";
import { Play, Sparkles, Zap, Music } from "lucide-react";
import appMockupImage from "@/assets/app-mockup.jpg";
import MobilePhoneImage from "./MobilePhoneImage";
import useScrollReveal from "@/hooks/useScrollReveal";

const PremiumHero = () => {
  const statsRef1 = useScrollReveal();
  const statsRef2 = useScrollReveal();
  const statsRef3 = useScrollReveal();

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-glow rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particleFloat ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Audio Visualizer Bars */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end gap-1 opacity-20">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="audio-bar"
              style={{
                '--duration': `${0.5 + Math.random() * 2}s`,
                '--delay': `${Math.random() * 2}s`
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-premium mb-8 pulse-premium">
              <Sparkles size={20} className="text-primary-glow" />
              <span className="font-semibold text-primary-glow">Powered by Advanced AI</span>
              <div className="audio-bars">
                <div className="audio-bar" style={{'--duration': '0.8s', '--delay': '0s'} as React.CSSProperties}></div>
                <div className="audio-bar" style={{'--duration': '1.2s', '--delay': '0.2s'} as React.CSSProperties}></div>
                <div className="audio-bar" style={{'--duration': '0.6s', '--delay': '0.4s'} as React.CSSProperties}></div>
                <div className="audio-bar" style={{'--duration': '1.5s', '--delay': '0.1s'} as React.CSSProperties}></div>
              </div>
            </div>

            {/* Hero Headlines - Mobile Typography: Your Voice=32px, Powered by AI=20px */}
            <h1 className="font-black mb-8 leading-none">
              <div className="text-h1 lg:text-8xl mb-4 text-glow">Your Voice.</div>
              <div className="text-h1 lg:text-8xl mb-4 text-glow">Your Music.</div>
              <div className="text-subhead lg:text-8xl text-gradient-premium">Powered by AI. 🎶</div>
            </h1>

            {/* Subtext - Mobile Typography: Body=16px or 14px */}
            <p className="text-body lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
              Create, Cover, and Remix songs instantly with cutting-edge AI technology. 
              <span className="text-secondary-glow"> No experience needed.</span>
            </p>

            {/* Premium CTA Buttons - Mobile Priority Layout */}
            <div className="flex flex-col gap-6 mb-16">
              {/* Primary CTA - Download App (Mobile First) */}
              <a href="https://play.google.com/store/apps/details?id=com.proksi.singai" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button 
                  size="lg" 
                  className="bg-gradient-premium hover:scale-105 transition-all duration-500 glow-premium text-lg sm:text-xl px-8 py-6 h-auto rounded-2xl font-bold shadow-2xl group w-full"
                >
                  <Music size={24} className="mr-3 group-hover:scale-125 transition-transform" />
                  Download App
                  <Sparkles size={20} className="ml-3 text-accent-bright" />
                </Button>
              </a>
              
              {/* Secondary CTA - Hidden on mobile above fold, shown on larger screens */}
              <div className="hidden sm:block">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-secondary-glow text-secondary-glow hover:bg-secondary-glow/10 hover:scale-105 transition-all duration-500 text-lg sm:text-xl px-8 py-6 h-auto rounded-2xl font-bold backdrop-blur-xl w-full"
                >
                  <Play size={24} className="mr-3" />
                  Try Free – 5 Daily Credits
                  <Zap size={20} className="ml-3 text-accent-bright" />
                </Button>
              </div>
            </div>

            {/* Premium Stats - Mobile Stacked with Scroll Reveal */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-2xl">
              <div 
                ref={statsRef1}
                className="glass-premium p-6 sm:p-8 text-center hover:scale-105 transition-all duration-500 glow-premium scroll-reveal"
              >
                <div className="text-3xl lg:text-4xl font-black text-primary-glow mb-3">2M+</div>
                <div className="text-muted-foreground font-medium text-body">Songs Created</div>
              </div>
              <div 
                ref={statsRef2}
                className="glass-music p-6 sm:p-8 text-center hover:scale-105 transition-all duration-500 glow-audio scroll-reveal"
              >
                <div className="text-3xl lg:text-4xl font-black text-secondary-glow mb-3">500K+</div>
                <div className="text-muted-foreground font-medium text-body">Active Creators</div>
              </div>
              <div 
                ref={statsRef3}
                className="glass-premium p-6 sm:p-8 text-center hover:scale-105 transition-all duration-500 glow-accent scroll-reveal"
              >
                <div className="text-3xl lg:text-4xl font-black text-accent-bright mb-3">100%</div>
                <div className="text-muted-foreground font-medium text-body">Royalty Free</div>
              </div>
            </div>
          </div>

          {/* Right Content - Mobile Phone Component and Mockups */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Mobile Phone Image Component - Desktop and Mobile */}
            <div className="block lg:hidden mb-8">
              <MobilePhoneImage 
                src={appMockupImage}
                alt="Sing AI App Interface"
                className="w-64 mx-auto"
              />
            </div>

            {/* Desktop Phone Mockups */}
            <div className="hidden lg:block">
              {/* Main Phone with Premium Effects */}
              <div className="relative z-20 float-premium">
                <div className="glass-music p-8 rounded-3xl glow-premium">
                  <img 
                    src={appMockupImage} 
                    alt="Sing AI App Interface" 
                    className="w-80 lg:w-96 h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Floating Audio Visualizers around phone */}
                <div className="absolute -top-8 -right-8 audio-bars opacity-60">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="audio-bar bg-primary-glow"
                      style={{
                        '--duration': `${0.5 + Math.random() * 1.5}s`,
                        '--delay': `${Math.random() * 1}s`
                      } as React.CSSProperties}
                    />
                  ))}
                </div>
                
                <div className="absolute -bottom-8 -left-8 audio-bars opacity-60">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="audio-bar bg-secondary-glow"
                      style={{
                        '--duration': `${0.8 + Math.random() * 1.2}s`,
                        '--delay': `${Math.random() * 1.5}s`
                      } as React.CSSProperties}
                    />
                  ))}
                </div>
              </div>

              {/* Secondary Phone - Partially Hidden */}
              <div className="absolute top-16 right-8 z-10 opacity-70 float-premium" style={{animationDelay: '2s'}}>
                <div className="glass-premium p-6 rounded-3xl">
                  <img 
                    src={appMockupImage} 
                    alt="Sing AI App Library" 
                    className="w-64 h-auto rounded-2xl shadow-xl"
                  />
                </div>
              </div>

              {/* Glowing Orbs */}
              <div className="absolute top-20 left-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-32 right-16 w-24 h-24 bg-secondary-glow/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-0 w-20 h-20 bg-accent-bright/25 rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-muted-foreground text-sm mb-2 font-medium">SCROLL DOWN</div>
        <div className="w-1 h-8 bg-gradient-to-b from-primary-glow to-transparent rounded-full animate-pulse mx-auto"></div>
      </div>
    </section>
  );
};

export default PremiumHero;
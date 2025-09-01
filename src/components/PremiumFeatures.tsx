import { Music, Mic, Users, Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import aiMusicImage from "@/assets/ai-music-creation.jpg";
import voiceCloningImage from "@/assets/voice-cloning-feature.jpg";
import musicCommunityImage from "@/assets/music-community.jpg";

const PremiumFeatures = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isFirstCardVisible, setIsFirstCardVisible] = useState(false);
  const [isSecondCardVisible, setIsSecondCardVisible] = useState(false);
  const [isThirdCardVisible, setIsThirdCardVisible] = useState(false);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Music,
      title: "AI-Powered Song Generation",
      description: "Revolutionary AI music creation powered by advanced artificial intelligence. Generate completely original songs by describing your idea, or take full control customizing every element.",
      badge: "Create",
      mobileImage: aiMusicImage,
      desktopImage: aiMusicImage,
      gradient: "bg-gradient-primary"
    },
    {
      icon: Mic,
      title: "Voice Cloning for Custom Covers",
      description: "Upload a voice sample and AI generates a vocal model that can sing any track. Explore different voice styles to reinterpret existing songs in entirely new ways.",
      badge: "Clone",
      mobileImage: voiceCloningImage,
      desktopImage: voiceCloningImage,
      gradient: "bg-gradient-accent"
    },
    {
      icon: Users,
      title: "Global Music Community",
      description: "Discover a vibrant global community of music creators. Listen to AI-generated songs and covers made by users worldwide. Share your own tracks and get discovered.",
      badge: "Connect",
      mobileImage: musicCommunityImage,
      desktopImage: musicCommunityImage,
      gradient: "bg-gradient-secondary"
    }
  ];

  const cardStyle = {
    borderRadius: "24px",
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger card animations in sequence
            setTimeout(() => setIsFirstCardVisible(true), 200);
            setTimeout(() => setIsSecondCardVisible(true), 600);
            setTimeout(() => setIsThirdCardVisible(true), 1000);
            
            // Auto-advance through cards
            setTimeout(() => setActiveCardIndex(1), 1500);
            setTimeout(() => setActiveCardIndex(2), 3000);
            setTimeout(() => setActiveCardIndex(0), 4500);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (cardsContainerRef.current) {
      observer.observe(cardsContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto cycle through cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-background-secondary">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary-glow/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent-bright/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Premium Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-premium mb-8 pulse-premium">
            <Star size={20} className="text-accent-bright" />
            <span className="font-semibold text-accent-bright">Premium Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gradient-premium">
            Revolutionary AI Voice Technology
          </h2>
        </div>

        {/* Layered Cards Container */}
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div
            ref={cardsContainerRef}
            className="relative flex-1 perspective-1000 min-h-[600px]"
          >
            {features.map((feature, index) => {
              const isVisible = index === 0 ? isFirstCardVisible : 
                               index === 1 ? isSecondCardVisible : 
                               isThirdCardVisible;
              
              const zIndex = 10 + (index * 10);
              const scale = index === 0 ? 0.9 : index === 1 ? 0.95 : 1;
              const translateY = isVisible
                ? activeCardIndex === index
                  ? index === 0 ? "90px" : index === 1 ? "55px" : "15px"
                  : index === 0 ? "90px" : index === 1 ? "45px" : "0"
                : "200px";

              return (
                <div
                  key={index}
                  className={`absolute inset-0 overflow-hidden shadow-xl ${
                    isVisible ? "animate-card-enter" : ""
                  }`}
                  style={{
                    ...cardStyle,
                    zIndex,
                    transform: `translateY(${translateY}) scale(${scale})`,
                    opacity: isVisible ? 1 : 0,
                    pointerEvents: isVisible ? "auto" : "none",
                  }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 z-0 ${feature.gradient} opacity-20`}></div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-20 hidden md:flex">
                    <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                      <span className="text-sm font-medium">{feature.badge}</span>
                    </div>
                  </div>

                  {/* Mobile: Background image */}
                  <div
                    className={`absolute inset-0 z-5 bg-center bg-contain bg-no-repeat transition-opacity duration-300 md:hidden ${
                      activeCardIndex > index ? "opacity-0" : "opacity-80"
                    }`}
                    style={{
                      backgroundImage: `url(${feature.mobileImage})`,
                    }}
                  ></div>

                  {/* Desktop: Left side image */}
                  <div
                    className={`hidden md:block absolute left-0 top-0 w-1/2 h-full z-5 transition-opacity duration-300 ${
                      activeCardIndex > index ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <img
                      src={feature.desktopImage}
                      alt={`${feature.title} illustration`}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`relative z-10 p-5 sm:p-6 md:p-8 h-full flex flex-col md:flex-row md:items-center justify-end transition-opacity duration-300 ${
                      activeCardIndex > index ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <div className="max-w-lg md:w-1/2 flex flex-col justify-end">
                      <div className="flex items-center gap-4 mb-4 md:hidden">
                        <feature.icon size={24} className="text-primary-glow" />
                        <span className="text-sm font-medium text-primary-glow">{feature.badge}</span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-4 text-center md:text-left text-foreground drop-shadow-2xl">
                        {feature.title}
                      </h3>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed text-center md:text-left">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center glass-premium p-12 rounded-3xl glow-premium mt-20">
          <h3 className="text-3xl lg:text-4xl font-black mb-6 text-gradient-premium">
            Ready to revolutionize your music creation?
          </h3>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Join millions of creators worldwide who are already making incredible music with AI. 
            Start your journey today and discover what's possible when technology meets creativity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://singai.onelink.me/OR6k/698ln6sq" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Download on the App Store" 
                className="h-16 hover:scale-110 transition-all duration-500"
              />
            </a>
            
            <a href="https://singai.onelink.me/OR6k/698ln6sq" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
                className="h-16 hover:scale-110 transition-all duration-500"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;
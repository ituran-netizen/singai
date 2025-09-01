import { useState, useEffect } from "react";
import { Star, Music, Mic, Users } from "lucide-react";

const features = [
  {
    title: "AI Music Creation",
    description: "Create original songs from scratch using advanced AI technology. Transform your ideas into professional-quality music with just a few clicks.",
    icon: Music,
    color: "primary" as const,
    gradient: "bg-gradient-to-br from-primary/20 to-primary-glow/20",
    comingSoon: false
  },
  {
    title: "Voice Cloning",
    description: "Clone any voice with incredible accuracy. Create covers of your favorite songs using your own voice or generate completely new vocal performances.",
    icon: Mic,
    color: "secondary" as const,
    gradient: "bg-gradient-to-br from-secondary/20 to-secondary-glow/20",
    comingSoon: false
  },
  {
    title: "Music Community",
    description: "Share your creations with a global community of music makers. Discover new trends, collaborate with artists, and get feedback on your work.",
    icon: Users,
    color: "accent" as const,
    gradient: "bg-gradient-to-br from-accent/20 to-accent-bright/20",
    comingSoon: true
  }
];

export default function PremiumSection() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Example scroll handler (you can customize this)
  useEffect(() => {
    function onScroll() {
      const cardHeight = window.innerHeight * 0.6; // trigger every ~60% viewport
      const index = Math.floor(window.scrollY / cardHeight);
      setActiveCardIndex(Math.min(index, features.length - 1));
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative z-10 max-w-7xl mx-auto">
      {/* Premium Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-3 px-6 py-3 glass-premium mb-8 pulse-premium">
          <Star size={20} className="text-accent-bright" />
          <span className="font-semibold text-accent-bright">Premium Features</span>
        </div>
        <h2 className="text-5xl lg:text-7xl font-black mb-8 text-gradient-premium">
          Sing AI: Create, Cover & Share Music with AI
        </h2>
        <div className="max-w-5xl mx-auto glass-music p-8 rounded-3xl">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-glow">
            SING AI – YOUR VOICE. YOUR MUSIC. POWERED BY AI
          </h3>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
            Create songs from scratch, cover your favorites with your own voice, and share your music with
            the world. Experience music creation like never before — with the power of Sing AI.
          </p>
        </div>
      </div>

      {/* Stacked Premium Feature Cards */}
      <div className="relative flex-1 perspective-[1000px] h-[600px]"> {/* Adjust height as needed */}
        {features.map((feature, index) => {
          // Determine transform values relative to active card
          const offset = 90 - 45 * Math.max(0, index - activeCardIndex); // top card: 90px, next: 45px, etc.
          const scale = 1 - 0.05 * Math.max(0, index - activeCardIndex);
          const opacity = index < activeCardIndex ? 0 : index === activeCardIndex ? 1 : 0.9;

          return (
            <div
              key={index}
              className="absolute inset-0 glass-premium p-8 overflow-hidden shadow-xl rounded-3xl transition-all duration-700"
              style={{
                zIndex: features.length - index,
                transform: `translateY(${offset}px) scale(${scale})`,
                opacity: opacity,
                pointerEvents: index === activeCardIndex ? "auto" : "none"
              }}
            >
              {/* Premium Background Gradient */}
              <div
                className={`absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700 ${feature.gradient}`}
              ></div>

              {/* Coming Soon Badge */}
              {feature.comingSoon && (
                <div className="absolute top-6 right-6 px-4 py-2 bg-gradient-accent rounded-full text-sm font-bold text-white glow-accent">
                  Coming Soon
                </div>
              )}

              {/* Premium Icon */}
              <div
                className={`relative z-10 w-16 h-16 rounded-2xl mb-8 flex items-center justify-center transition-transform duration-500 ${
                  feature.color === "primary"
                    ? "glass-music glow-premium"
                    : feature.color === "secondary"
                    ? "glass-premium glow-audio"
                    : "glass-premium glow-accent"
                }`}
              >
                <feature.icon
                  size={32}
                  className={
                    feature.color === "primary"
                      ? "text-primary-glow"
                      : feature.color === "secondary"
                      ? "text-secondary-glow"
                      : "text-accent-bright"
                  }
                />
              </div>

              {/* Premium Content */}
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-black mb-6 text-glow">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>

              {/* Interactive Audio Bars */}
              {index % 3 === 0 && (
                <div className="absolute bottom-4 right-4 audio-bars opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className={`audio-bar ${
                        feature.color === "primary"
                          ? "bg-primary-glow"
                          : feature.color === "secondary"
                          ? "bg-secondary-glow"
                          : "bg-accent-bright"
                      }`}
                      style={{
                        "--duration": `${0.6 + Math.random() * 1}s`,
                        "--delay": `${Math.random() * 0.5}s`
                      } as React.CSSProperties}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Premium Call to Action */}
      <div className="text-center glass-premium p-12 rounded-3xl glow-premium mt-20">
        <h3 className="text-3xl lg:text-4xl font-black mb-6 text-gradient-premium">
          Ready to revolutionize your music creation?
        </h3>
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          Join millions of creators worldwide who are already making incredible music with AI.
          Start your journey today and discover what's possible when technology meets creativity.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="https://singai.onelink.me/OR6k/7dllr4s5" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="Download on the App Store"
              className="h-16 hover:scale-110 transition-all duration-500"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.proksi.singai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-16 hover:scale-110 transition-all duration-500"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

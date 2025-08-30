import { Music, Mic, Palette, Users, Download, Sparkles, Zap, Star } from "lucide-react";

const PremiumFeatures = () => {
  const features = [
    {
      icon: Sparkles,
      title: "UNLOCK ENDLESS CREATIVE POSSIBILITIES",
      description: "Revolutionary AI music creation powered by advanced artificial intelligence. Generate completely original songs by describing your idea, or take full control customizing every element. With 200+ music genres and 200+ instruments, the possibilities are truly limitless.",
      color: "primary",
      gradient: "bg-gradient-premium"
    },
    {
      icon: Music,
      title: "AI-POWERED SONG GENERATION",
      description: "Start with a simple idea and watch AI create a complete composition tailored to your theme. Includes intelligent melody, chord progression, lyrics, vocals, mood, and instrument selection. Perfect for heartfelt messages, rap verses, or ambient instrumentals.",
      color: "secondary",
      gradient: "bg-gradient-audio"
    },
    {
      icon: Mic,
      title: "VOICE CLONING FOR CUSTOM COVERS",
      description: "Upload a voice sample and AI generates a vocal model that can sing any track. Explore different voice styles to reinterpret existing songs in entirely new ways while preserving the original melody and rhythm for seamless listening.",
      color: "accent",
      gradient: "bg-gradient-accent"
    },
    {
      icon: Users,
      title: "EXPLORE AND CONNECT WITH CREATORS",
      description: "Discover a vibrant global community of music creators. Listen to AI-generated songs and covers made by users worldwide. Share your own tracks and get discovered by a global audience passionate about AI music creation.",
      color: "primary",
      gradient: "bg-gradient-premium"
    },
    {
      icon: Music,
      title: "BUILD AND SHARE YOUR MUSIC LIBRARY",
      description: "Save favorite songs and build custom playlists. Create themed collections for workouts, road trips, emotional memories, or any mood. Share them with friends or keep them private for your personal musical journey.",
      color: "secondary",
      gradient: "bg-gradient-audio"
    },
    {
      icon: Palette,
      title: "COMING SOON: REMIX MODE",
      description: "Reimagine songs your way with advanced AI remixing tools. Change lyrics, swap voices, adjust mood, and transform tracks with completely new vibes. Make any song entirely your own with unprecedented creative control.",
      color: "accent",
      gradient: "bg-gradient-accent",
      comingSoon: true
    },
    {
      icon: Download,
      title: "DOWNLOAD AND SHARE FREELY",
      description: "All songs created are 100% royalty-free with full ownership rights. Export with custom visuals and share anywhere - social media, messages, streaming platforms, or your professional portfolio. Monetize your creations without restrictions.",
      color: "primary",
      gradient: "bg-gradient-premium"
    },
    {
      icon: Zap,
      title: "MUSIC FOR EVERYONE — NO EXPERIENCE NEEDED",
      description: "Designed for all creators regardless of musical background. Whether you're a complete beginner or experienced musician, create studio-quality tracks in minutes using only your phone and voice. Professional results, zero learning curve.",
      color: "secondary",
      gradient: "bg-gradient-audio"
    }
  ];

  // Select top features for stacking effect
  const stackedFeatures = features.slice(0, 4);

  return (
    <section className="relative w-full" style={{ height: `${stackedFeatures.length * 110}vh` }}>
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary-glow/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent-bright/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen bg-background-secondary overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 py-16">
          {/* Premium Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-premium mb-6 pulse-premium">
              <Star size={20} className="text-accent-bright" />
              <span className="font-semibold text-accent-bright">Premium Features</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black mb-6 text-gradient-premium">
              Revolutionary AI Music Technology
            </h2>
          </div>

          {/* Stacked Cards */}
          <div className="relative h-full">
            {stackedFeatures.map((feature, index) => (
              <article
                key={index}
                className="
                  sticky top-24
                  mx-auto w-full lg:w-[92%] h-[60vh] max-h-[600px]
                  rounded-3xl shadow-2xl overflow-hidden
                  glass-premium
                  will-change-transform transition-all duration-500
                  group
                "
                style={{
                  zIndex: 10 + index,
                  transform: `scale(${1 - (stackedFeatures.length - 1 - index) * 0.02})`,
                  opacity: 1 - (stackedFeatures.length - 1 - index) * 0.05,
                  marginTop: index === 0 ? 0 : "18vh",
                }}
              >
                {/* Premium Background Gradient */}
                <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 ${feature.gradient}`}></div>
                
                {/* Coming Soon Badge */}
                {feature.comingSoon && (
                  <div className="absolute top-6 right-6 z-20 px-4 py-2 bg-gradient-accent rounded-full text-sm font-bold text-white glow-accent">
                    Coming Soon
                  </div>
                )}

                {/* Left side - Icon on mobile, full layout on desktop */}
                <div className="absolute inset-0 lg:left-0 lg:top-0 lg:w-1/3 lg:h-full flex items-center justify-center p-8">
                  <div className={`w-24 h-24 lg:w-32 lg:h-32 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 ${
                    feature.color === 'primary' ? 'glass-music glow-premium' :
                    feature.color === 'secondary' ? 'glass-premium glow-audio' :
                    'glass-premium glow-accent'
                  }`}>
                    <feature.icon size={48} className={`lg:w-16 lg:h-16 ${
                      feature.color === 'primary' ? 'text-primary-glow' :
                      feature.color === 'secondary' ? 'text-secondary-glow' :
                      'text-accent-bright'
                    }`} />
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="relative z-10 h-full flex items-center lg:justify-end p-6 lg:p-8">
                  <div className="max-w-2xl lg:w-2/3 text-center lg:text-left">
                    <h3 className="text-2xl lg:text-4xl font-black mb-6 text-glow leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg lg:text-xl">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Interactive Audio Bars */}
                {index % 2 === 0 && (
                  <div className="absolute bottom-6 right-6 audio-bars opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className={`audio-bar ${feature.color === 'primary' ? 'bg-primary-glow' : feature.color === 'secondary' ? 'bg-secondary-glow' : 'bg-accent-bright'}`}
                        style={{
                          '--duration': `${0.6 + Math.random() * 1}s`,
                          '--delay': `${Math.random() * 0.5}s`
                        } as React.CSSProperties}
                      />
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Call to Action - Outside sticky viewport */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center glass-premium p-12 rounded-3xl glow-premium">
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
            
            <a href="https://play.google.com/store/apps/details?id=com.proksi.singai" target="_blank" rel="noopener noreferrer">
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
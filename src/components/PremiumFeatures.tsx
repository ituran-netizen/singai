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

        {/* Premium Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-premium p-8 hover:scale-105 transition-all duration-700 group relative overflow-hidden rounded-3xl"
            >
              {/* Premium Background Gradient */}
              <div className={`absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700 ${feature.gradient}`}></div>
              
              {/* Coming Soon Badge */}
              {feature.comingSoon && (
                <div className="absolute top-6 right-6 px-4 py-2 bg-gradient-accent rounded-full text-sm font-bold text-white glow-accent">
                  Coming Soon
                </div>
              )}

              {/* Premium Icon */}
              <div className={`relative z-10 w-16 h-16 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-125 transition-all duration-500 ${
                feature.color === 'primary' ? 'glass-music glow-premium' :
                feature.color === 'secondary' ? 'glass-premium glow-audio' :
                'glass-premium glow-accent'
              }`}>
                <feature.icon size={32} className={
                  feature.color === 'primary' ? 'text-primary-glow' :
                  feature.color === 'secondary' ? 'text-secondary-glow' :
                  'text-accent-bright'
                } />
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
                      className={`audio-bar ${feature.color === 'primary' ? 'bg-primary-glow' : feature.color === 'secondary' ? 'bg-secondary-glow' : 'bg-accent-bright'}`}
                      style={{
                        '--duration': `${0.6 + Math.random() * 1}s`,
                        '--delay': `${Math.random() * 0.5}s`
                      } as React.CSSProperties}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Premium Call to Action */}
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
                className="h-16 hover:scale-110 transition-all duration-500 filter brightness-0 invert"
              />
            </a>
            
            <a href="https://play.google.com/store/apps/details?id=com.proksi.singai" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
                className="h-16 hover:scale-110 transition-all duration-500 filter brightness-0 invert"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;
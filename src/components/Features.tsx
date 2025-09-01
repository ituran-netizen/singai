import { Music, Mic, Palette, Users, Download, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: "UNLOCK ENDLESS CREATIVE POSSIBILITIES",
      description: "Sing AI is a revolutionary music creation app powered by advanced artificial intelligence. Whether you want to write a love song, commemorate a memory, create a fun track for your pet, or produce a powerful ballad for Mother's Day, Sing AI makes it possible. You can generate a completely original song by simply describing your idea, or take full control by customizing every element — from lyrics and mood to genre and instruments. With support for over 200 music genres and 200 instruments, the possibilities are limitless."
    },
    {
      icon: Music,
      title: "AI-POWERED SONG GENERATION",
      description: "You can start with a simple idea or prompt, and Sing AI will intelligently generate a complete composition tailored to your theme. This includes melody, chord progression, lyrics, vocals, mood, and instrument selection. Prefer to write your own lyrics or fine-tune the details? You can do that too. Whether you're creating a heartfelt message, a rap verse, or an ambient instrumental, Sing AI adapts to your vision with precision."
    },
    {
      icon: Mic,
      title: "VOICE CLONING FOR CUSTOM COVERS",
      description: "With Sing AI's voice cloning technology, you can recreate any song using your own voice. Simply upload a voice sample, and Sing AI will generate a vocal model that can sing any track. You can also explore other voice styles to reinterpret existing songs in entirely new ways. The original melody and rhythm are preserved, ensuring a natural and seamless listening experience."
    },
    {
      icon: Users,
      title: "EXPLORE AND CONNECT WITH OTHER CREATORS",
      description: "The Explore feature allows you to discover a vibrant community of creators. Listen to AI-generated songs and covers made by users like you. Share your own tracks and get discovered by a global audience."
    },
    {
      icon: Music,
      title: "BUILD AND SHARE YOUR MUSIC LIBRARY",
      description: "With the Library feature, you can save your favorite songs and build custom playlists. Create themed collections — from workouts and road trips to emotional memories — and share them with others or keep them for yourself."
    },
    {
      icon: Palette,
      title: "COMING SOON: REMIX MODE",
      description: "Reimagine songs your way. Change lyrics, voices, or mood. Remix tracks with a new vibe and make them entirely your own.",
      comingSoon: true
    },
    {
      icon: Download,
      title: "DOWNLOAD AND SHARE FREELY",
      description: "All songs created with Sing AI are royalty-free. Export them with custom visuals and share them anywhere — on social media, in messages, or in your portfolio."
    },
    {
      icon: Sparkles,
      title: "MUSIC FOR EVERYONE — NO EXPERIENCE NEEDED",
      description: "Sing AI is designed for all creators, regardless of background. Whether you're just starting or already making music, you can create studio-quality tracks in minutes using only your phone and your voice."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Sing AI: Create, Cover & Share Music with AI
          </h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              SING AI – YOUR VOICE. YOUR MUSIC. POWERED BY AI
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Create songs from scratch, cover your favorites with your own voice, and share your music with 
              the world. Experience music creation like never before — with the power of Sing AI.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-card-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Coming Soon Badge */}
              {feature.comingSoon && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                  Coming Soon
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-6">
                <feature.icon size={24} className="text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to revolutionize your music creation experience?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://singai.onelink.me/OR6k/698ln6sq" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Download on the App Store" 
                className="h-14 hover:opacity-80 transition-opacity"
              />
            </a>
            
            <a href="https://singai.onelink.me/OR6k/698ln6sq" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
                className="h-14 hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
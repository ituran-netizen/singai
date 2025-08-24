import { Button } from "@/components/ui/button";
import { Play, Heart, Share2, MessageCircle, TrendingUp, Users } from "lucide-react";

const Community = () => {
  const mockSongs = [
    {
      id: 1,
      title: "Neon Dreams",
      artist: "@synthwave_alex",
      genre: "Synthwave",
      plays: "12.5K",
      likes: "1.2K",
      type: "AI Generated",
      duration: "3:24",
      image: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Coffee Shop Vibes",
      artist: "@lofi_sarah",
      genre: "Lo-Fi Hip Hop",
      plays: "28.9K",
      likes: "3.1K",
      type: "Voice Cover",
      duration: "2:45",
      image: "bg-gradient-to-br from-amber-500 to-orange-500"
    },
    {
      id: 3,
      title: "Electric Storm",
      artist: "@edm_producer",
      genre: "Electronic",
      plays: "45.2K",
      likes: "5.8K",
      type: "AI Generated",
      duration: "4:12",
      image: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      title: "Midnight Jazz",
      artist: "@jazz_vibes",
      genre: "Jazz",
      plays: "8.7K",
      likes: "892",
      type: "Voice Cover",
      duration: "5:33",
      image: "bg-gradient-to-br from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-secondary to-background"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Users size={16} className="text-secondary-glow" />
            <span className="text-sm font-medium text-secondary-glow">Global Community</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Discover Amazing{" "}
            <span className="text-gradient">Creator Content</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore a world of AI-generated music, voice covers, and remixes. 
            Get inspired by what other creators are making and share your own masterpieces.
          </p>

          {/* Community Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <TrendingUp size={20} className="text-primary-glow" />
              <span className="text-lg font-semibold">50K+ songs this week</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart size={20} className="text-secondary-glow" />
              <span className="text-lg font-semibold">2M+ likes given</span>
            </div>
            <div className="flex items-center gap-2">
              <Share2 size={20} className="text-accent" />
              <span className="text-lg font-semibold">100K+ shares</span>
            </div>
          </div>
        </div>

        {/* TikTok-style Feed Preview */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Trending Now</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {mockSongs.map((song, index) => (
              <div 
                key={song.id} 
                className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
              >
                {/* Song Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-xl ${song.image} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Play size={24} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-lg">{song.title}</h4>
                      <span className="px-2 py-1 bg-primary/20 text-primary-glow text-xs rounded-full font-medium">
                        {song.type}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{song.artist}</p>
                    <p className="text-sm text-muted-foreground">{song.genre} • {song.duration}</p>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Play size={16} className="text-primary-glow" />
                      <span className="text-sm font-medium">{song.plays}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart size={16} className="text-secondary-glow" />
                      <span className="text-sm font-medium">{song.likes}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost" className="hover:bg-secondary/10">
                      <MessageCircle size={16} />
                    </Button>
                    <Button size="sm" variant="ghost" className="hover:bg-accent/10">
                      <Share2 size={16} />
                    </Button>
                  </div>
                </div>

                {/* Waveform Visualization */}
                <div className="flex items-center gap-1 h-8 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div 
                      key={i}
                      className="w-1 bg-primary-glow rounded-full animate-pulse"
                      style={{ 
                        height: `${Math.random() * 100 + 20}%`,
                        animationDelay: `${i * 100}ms`
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-secondary hover:scale-105 transition-all duration-300 glow-secondary text-lg px-8 py-4 h-auto"
            >
              Explore Full Community Feed
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
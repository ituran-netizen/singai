import { Button } from "@/components/ui/button";
import { Play, Pause, SkipForward, SkipBack, Volume2, Heart, Music, Twitter, Instagram, Youtube, Facebook } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <footer className="relative">
      {/* Floating Music Player */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="glass-card px-6 py-4 flex items-center gap-4 min-w-96 glow-primary">
          {/* Album Art */}
          <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Music size={20} className="text-white" />
          </div>
          
          {/* Song Info */}
          <div className="flex-1">
            <div className="text-sm font-medium">Demo Track - "AI Symphony"</div>
            <div className="text-xs text-muted-foreground">Created with Sing AI</div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" className="hover:bg-primary/10">
              <SkipBack size={16} />
            </Button>
            
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/80"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </Button>
            
            <Button size="sm" variant="ghost" className="hover:bg-primary/10">
              <SkipForward size={16} />
            </Button>
            
            <Button size="sm" variant="ghost" className="hover:bg-secondary/10">
              <Heart size={16} />
            </Button>
            
            <Button size="sm" variant="ghost" className="hover:bg-accent/10">
              <Volume2 size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-background-secondary border-t border-border/30 pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-black mb-4 text-gradient">Sing AI</h3>
              <p className="text-muted-foreground mb-6">
                The ultimate AI music creation platform. Create, cover, and share your musical masterpieces.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                <Button size="sm" variant="ghost" className="hover:bg-primary/10">
                  <Twitter size={16} />
                </Button>
                <Button size="sm" variant="ghost" className="hover:bg-primary/10">
                  <Instagram size={16} />
                </Button>
                <Button size="sm" variant="ghost" className="hover:bg-primary/10">
                  <Youtube size={16} />
                </Button>
                <Button size="sm" variant="ghost" className="hover:bg-primary/10">
                  <Facebook size={16} />
                </Button>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary-glow transition-colors">AI Song Generator</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Voice Cloning</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Remix Tools</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Community</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary-glow transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary-glow transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Sing AI. All rights reserved. Built with love for creators worldwide.
            </div>
            
            <div className="text-sm text-muted-foreground">
              Made with AI • Powered by Innovation • Owned by You
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
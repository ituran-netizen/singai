import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import MobileNavigation from './MobileNavigation';

const PremiumNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-premium border-b border-primary/20">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          {/* Logo with Audio Visualizer - Links to Home */}
          <Link 
            to="/" 
            className="flex items-center gap-4 hover:scale-105 transition-transform duration-300"
            aria-label="Go to home"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-end gap-1">
                <div className="w-1 h-6 bg-primary-glow rounded-full wave-animation" style={{animationDelay: '0s'}}></div>
                <div className="w-1 h-8 bg-secondary-glow rounded-full wave-animation" style={{animationDelay: '0.2s'}}></div>
                <div className="w-1 h-4 bg-accent-bright rounded-full wave-animation" style={{animationDelay: '0.4s'}}></div>
                <div className="w-1 h-7 bg-primary-glow rounded-full wave-animation" style={{animationDelay: '0.6s'}}></div>
                <div className="w-1 h-5 bg-secondary-glow rounded-full wave-animation" style={{animationDelay: '0.8s'}}></div>
              </div>
              <span className="text-2xl font-black text-gradient-premium">Sing AI</span>
            </div>
          </Link>

        {/* Premium Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#ContactSupport" 
            className="text-foreground hover:text-primary-glow transition-all duration-300 font-semibold hover:scale-110 relative group"
          >
            Contact Support
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-glow transition-all duration-300 group-hover:w-full"></div>
          </a>
          <a 
            href="#FAQ" 
            className="text-foreground hover:text-secondary-glow transition-all duration-300 font-semibold hover:scale-110 relative group"
          >
            FAQS
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-glow transition-all duration-300 group-hover:w-full"></div>
          </a>
        </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-foreground hover:text-primary-glow transition-colors p-2 rounded-lg hover:bg-primary/10"
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <MobileNavigation 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default PremiumNavigation;
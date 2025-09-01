import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavigation = ({ isOpen, onClose }: MobileNavigationProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('scroll-lock');
    } else {
      document.body.classList.remove('scroll-lock');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('scroll-lock');
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Focus trap - focus on the close button when opened
      const closeButton = document.querySelector('[data-mobile-nav-close]') as HTMLButtonElement;
      if (closeButton) {
        closeButton.focus();
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-nav-title"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/95 backdrop-blur-xl"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Navigation Panel */}
      <div className="fixed inset-0 z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-primary/20">
          <h2 id="mobile-nav-title" className="text-2xl font-black text-gradient-premium">
            Navigation
          </h2>
          <button
            data-mobile-nav-close
            onClick={onClose}
            className="p-2 text-foreground hover:text-primary-glow transition-colors rounded-lg hover:bg-primary/10"
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 flex flex-col justify-center px-6 space-y-8">
          <a
            href="#ContactSupport"
            onClick={onClose}
            className="text-3xl font-bold text-foreground hover:text-primary-glow transition-all duration-300 py-4 border-b border-primary/10 hover:border-primary-glow/50"
          >
            Contact Support
          </a>
          <a
            href="#FAQ"
            onClick={onClose}
            className="text-3xl font-bold text-foreground hover:text-secondary-glow transition-all duration-300 py-4 border-b border-primary/10 hover:border-secondary-glow/50"
          >
            FAQS
          </a>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-primary/20">
          <div className="flex items-center justify-center gap-3">
            <img 
              src="/src/assets/logo.png" 
              alt="Sing AI Logo" 
              className="w-6 h-6 object-contain"
            />
            <span className="text-lg font-bold text-muted-foreground">Sing AI</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
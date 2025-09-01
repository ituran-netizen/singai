const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-6 max-w-6xl mx-auto">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img 
          src="/src/assets/logo.png" 
          alt="Sing AI Logo" 
          className="w-8 h-8 object-contain"
        />
        <span className="text-2xl font-bold text-foreground">Sing AI</span>
      </div>

        <div className="flex items-center gap-8">
          <a 
            href="#ContactSupport" 
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Contact Support
          </a>
          <a 
            href="#FAQ" 
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            FAQS
          </a>
        </div>
    </nav>
  );
};

export default Navigation;
const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-6 max-w-6xl mx-auto">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex items-center">
          {/* Sound wave icon */}
          <div className="flex items-end gap-1">
            <div className="w-1 h-4 bg-primary rounded-full"></div>
            <div className="w-1 h-6 bg-primary rounded-full"></div>
            <div className="w-1 h-3 bg-primary rounded-full"></div>
            <div className="w-1 h-5 bg-primary rounded-full"></div>
          </div>
        </div>
        <span className="text-2xl font-bold text-foreground">Sing AI</span>
      </div>

      {/* Navigation Links */}
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
const SimpleFooter = () => {
  return (
    <footer className="bg-background-secondary py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="flex items-center">
            {/* Sound wave icon */}
            <div className="flex items-end gap-1">
              <div className="w-1 h-4 bg-primary rounded-full"></div>
              <div className="w-1 h-6 bg-primary rounded-full"></div>
              <div className="w-1 h-3 bg-primary rounded-full"></div>
              <div className="w-1 h-5 bg-primary rounded-full"></div>
            </div>
          </div>
          <span className="text-3xl font-bold text-foreground">Sing AI</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <a 
            href="#FAQ" 
            className="text-foreground hover:text-primary transition-colors"
          >
            FAQ
          </a>
          <a 
            href="#ContactSupport" 
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact Support
          </a>
          <a 
            href="/terms" 
            className="text-foreground hover:text-primary transition-colors"
          >
            Terms & Conditions
          </a>
          <a 
            href="/privacy-policy" 
            className="text-foreground hover:text-primary transition-colors"
          >
            Privacy Policy
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-muted-foreground">
          © Copyright 2024 Proksi Yazılım
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
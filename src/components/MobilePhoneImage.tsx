interface MobilePhoneImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

const MobilePhoneImage = ({ 
  src = "/placeholder-phone.jpg", 
  alt = "Mobile Phone Mockup",
  className = ""
}: MobilePhoneImageProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Phone Frame */}
      <div className="relative glass-music p-4 rounded-3xl">
        <div className="relative bg-background rounded-2xl overflow-hidden shadow-2xl">
          {/* Phone Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-background rounded-b-xl z-10"></div>
          
          {/* Phone Image */}
          <img 
            src={src}
            alt={alt}
            className="w-full h-auto rounded-2xl"
            loading="lazy"
          />
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-glow/30 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-secondary-glow/20 rounded-full blur-md animate-pulse" style={{animationDelay: '1s'}}></div>
    </div>
  );
};

export default MobilePhoneImage;
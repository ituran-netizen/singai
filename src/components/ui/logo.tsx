interface LogoProps {
  className?: string;
  animated?: boolean;
}

const Logo = ({ className = "", animated = false }: LogoProps) => {
  return (
    <div className={`flex items-end gap-1 ${className}`}>
      <div 
        className={`w-1.5 h-8 bg-gradient-to-t from-[#8E05C2] to-[#7100E2] rounded-full ${
          animated ? 'wave-animation' : ''
        }`}
        style={animated ? { animationDelay: '0s' } : {}}
      />
      <div 
        className={`w-1.5 h-12 bg-gradient-to-t from-[#7100E2] to-[#8E05C2] rounded-full ${
          animated ? 'wave-animation' : ''
        }`}
        style={animated ? { animationDelay: '0.1s' } : {}}
      />
      <div 
        className={`w-1.5 h-6 bg-gradient-to-t from-[#8E05C2] to-[#7100E2] rounded-full ${
          animated ? 'wave-animation' : ''
        }`}
        style={animated ? { animationDelay: '0.2s' } : {}}
      />
      <div 
        className={`w-1.5 h-10 bg-gradient-to-t from-[#7100E2] to-[#8E05C2] rounded-full ${
          animated ? 'wave-animation' : ''
        }`}
        style={animated ? { animationDelay: '0.3s' } : {}}
      />
      <div 
        className={`w-1.5 h-7 bg-gradient-to-t from-[#8E05C2] to-[#7100E2] rounded-full ${
          animated ? 'wave-animation' : ''
        }`}
        style={animated ? { animationDelay: '0.4s' } : {}}
      />
    </div>
  );
};

export default Logo;
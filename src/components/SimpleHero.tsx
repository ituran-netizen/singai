import { Button } from "@/components/ui/button";
import appMockupImage from "@/assets/app-mockup.jpg";

const SimpleHero = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI Covers For<br />
              <span className="text-primary">Any Song</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              any song with any voice
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
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

          {/* Right Content - Phone Mockups */}
          <div className="relative">
            <div className="flex justify-center items-center">
              {/* Main Phone */}
              <div className="relative z-10">
                <div className="w-72 h-auto">
                  <img 
                    src={appMockupImage} 
                    alt="Sing AI App Interface" 
                    className="w-full h-auto rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
              
              {/* Second Phone - Partially Hidden */}
              <div className="absolute right-0 top-8 z-0 opacity-80">
                <div className="w-64 h-auto">
                  <img 
                    src={appMockupImage} 
                    alt="Sing AI App Library" 
                    className="w-full h-auto rounded-3xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;
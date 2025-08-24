import Navigation from "@/components/Navigation";
import SimpleFooter from "@/components/SimpleFooter";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              This Privacy Policy describes how Sing AI collects, uses, and protects your information 
              when you use our AI-powered music creation application.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information to provide and improve our AI music creation services:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Voice samples and audio recordings you upload for AI processing</li>
                  <li>Songs and music compositions you create using our platform</li>
                  <li>Account information including email address and preferences</li>
                  <li>Usage data to improve our AI algorithms and user experience</li>
                  <li>Device information and technical data for app functionality</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Process your voice samples to create AI vocal models</li>
                  <li>Generate custom songs and covers based on your requests</li>
                  <li>Provide access to community features and song sharing</li>
                  <li>Improve our AI technology and app performance</li>
                  <li>Send important updates about our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You have full ownership and control over your created content:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>All songs you create are royalty-free and belong to you</li>
                  <li>You can download and share your music anywhere</li>
                  <li>You can delete your voice models and data at any time</li>
                  <li>You control what content you share with the community</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect your data and 
                  voice samples. All processing is done securely, and we never share your 
                  personal voice data with third parties without your explicit consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy or how we handle your data, 
                  please contact our support team through the app or visit our website.
                </p>
              </section>

              <div className="border-t border-border pt-8 mt-12">
                <p className="text-sm text-muted-foreground">
                  Last updated: December 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SimpleFooter />
    </div>
  );
};

export default PrivacyPolicy;
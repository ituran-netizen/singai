import Navigation from "@/components/Navigation";
import SimpleFooter from "@/components/SimpleFooter";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              These Terms of Service govern your use of Sing AI, the AI-powered music creation application.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By downloading, accessing, or using Sing AI, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our application.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Your Content and Rights</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>You retain full ownership of all songs and music you create using Sing AI</li>
                  <li>All created content is royalty-free and can be used commercially</li>
                  <li>You grant us permission to process your voice samples for AI model creation</li>
                  <li>You are responsible for ensuring you have rights to any source material you upload</li>
                  <li>You can delete your voice models and content at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibent mb-4">Acceptable Use</h2>
                <p className="text-muted-foreground mb-4">
                  You agree to use Sing AI responsibly and in compliance with all applicable laws:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Do not create content that infringes on others' intellectual property rights</li>
                  <li>Do not use voice cloning for impersonation or fraudulent purposes</li>
                  <li>Do not create harmful, offensive, or illegal content</li>
                  <li>Respect the community guidelines when sharing content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">AI Technology and Limitations</h2>
                <p className="text-muted-foreground mb-4">
                  Our AI technology is provided "as is" and we make no guarantees about:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>The quality or accuracy of AI-generated content</li>
                  <li>Continuous availability of all features</li>
                  <li>Perfect voice cloning results</li>
                  <li>Compatibility with all devices or operating systems</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Subscription and Payments</h2>
                <p className="text-muted-foreground mb-4">
                  All subscriptions are managed through the Apple App Store or Google Play Store:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Subscription fees are charged according to your chosen plan</li>
                  <li>Cancellations must be made through your app store account</li>
                  <li>Refunds are subject to app store policies</li>
                  <li>Free features remain available regardless of subscription status</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Privacy and Data</h2>
                <p className="text-muted-foreground">
                  Your privacy is important to us. Please review our Privacy Policy to understand 
                  how we collect, use, and protect your information and voice data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We may update these Terms of Service from time to time. We will notify you of 
                  any significant changes through the app or by email.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, please contact our support team 
                  through the application or our website.
                </p>
              </section>

              <div className="border-t border-border pt-8 mt-12">
                <p className="text-sm text-muted-foreground">
                  Last updated: December 2024
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  © 2024 Proksi Yazılım. All rights reserved.
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

export default TermsOfService;
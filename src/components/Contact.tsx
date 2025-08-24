import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form submitted:", message);
    setMessage("");
  };

  return (
    <section id="ContactSupport" className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Contact Support
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <Textarea 
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-32 text-base rounded-lg border-2"
            required
          />
          
          <Button 
            type="submit"
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-12 py-3 text-lg font-medium rounded-lg"
          >
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
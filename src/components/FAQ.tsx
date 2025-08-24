import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "When will multilingual service be supported?",
      answer: "Our AI Already supports multiple languages. You can cover any song with non-native speakers, and it will make perfect covers."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription anytime without being subjected to any inquiries. Apple's App Store manages all the subscriptions."
    },
    {
      question: "How do I request a refund?",
      answer: "Since all transactions for our app are processed through the Apple App Store, we cannot issue refunds directly. However, you can request a refund directly from Apple."
    }
  ];

  return (
    <section id="FAQ" className="py-20 px-6 bg-background-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-card-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 pb-4 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
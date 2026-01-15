import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
    toast({
      title: "You're on the list! 🎉",
      description: "We'll be in touch soon with exclusive access.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-volcanic-surface" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 rounded-full gradient-magma flex items-center justify-center mx-auto mb-8 glow-magma">
              <CheckCircle className="w-12 h-12 text-primary-foreground" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Welcome to the <span className="gradient-magma-text">Evolution</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              You're now on the waitlist for MagmaAI. We'll reach out soon with exclusive access to our demo and early adopter benefits.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-volcanic-surface" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full volcanic-glass mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Limited Early Access</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Join the <span className="gradient-magma-text">Evolution</span> of Engineering
            </h2>
            <p className="text-muted-foreground text-lg">
              Get early access to MagmaAI and be among the first to transform your R&D organization into an AI-native powerhouse.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="volcanic-glass rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-volcanic-dark border-border focus:border-primary focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-foreground">
                  Company
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your Company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                  className="bg-volcanic-dark border-border focus:border-primary focus:ring-primary"
                />
              </div>
            </div>
            <div className="space-y-2 mb-8">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Work Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-volcanic-dark border-border focus:border-primary focus:ring-primary"
              />
            </div>
            <Button
              type="submit"
              variant="magma"
              size="xl"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Joining...
                </span>
              ) : (
                <>
                  Request Early Access
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>

            <p className="text-center text-muted-foreground text-sm mt-6">
              By joining, you agree to receive updates about MagmaAI. Unsubscribe anytime.
            </p>
          </form>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 items-center text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Demo access included
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Priority onboarding
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;

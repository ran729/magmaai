import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";

// Google Form configuration
const GOOGLE_FORM_ID = "1FAIpQLSfCfnUuapnd-ObgyytL8zZpqAKBoP3cWPeOLjF19C7a3rjhtQ";
const GOOGLE_FORM_ACTION_URL = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;

// Google Form entry IDs
const FORM_ENTRY_IDS = {
  name: "entry.1001137070",
  company: "entry.1619884169",
  email: "entry.1109049885",
};

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [aiTools, setAiTools] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Create form data for Google Forms submission
      const formData = new FormData();
      formData.append(FORM_ENTRY_IDS.name, name);
      formData.append(FORM_ENTRY_IDS.company, company);
      formData.append(FORM_ENTRY_IDS.email, email);

      // Submit to Google Form
      // Note: Using 'no-cors' mode because Google Forms doesn't return CORS headers
      // This means we can't read the response, but the submission will succeed
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setIsSubmitted(true);
      toast({
        title: "You're on the list! 🎉",
        description: "We'll be in touch soon with exclusive access.",
      });
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full volcanic-glass mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Private Beta</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                We're onboarding a small number of <span className="gradient-magma-text">R&D teams</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Tell us about your team and we'll reach out within 48 hours. Early adopters get hands-on onboarding and direct input into the roadmap.
              </p>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.1}>
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
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
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
              <div className="space-y-2">
                <label htmlFor="teamSize" className="text-sm font-medium text-foreground">
                  Engineering Team Size
                </label>
                <select
                  id="teamSize"
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  required
                  className="flex h-10 w-full rounded-md border border-border bg-volcanic-dark px-3 py-2 text-sm text-foreground ring-offset-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                >
                  <option value="" disabled>Select team size</option>
                  <option value="1-5">1–5 engineers</option>
                  <option value="6-20">6–20 engineers</option>
                  <option value="21-50">21–50 engineers</option>
                  <option value="50+">50+ engineers</option>
                </select>
              </div>
            </div>
            <div className="space-y-2 mb-8">
              <label htmlFor="aiTools" className="text-sm font-medium text-foreground">
                Which AI coding tools does your team use?
              </label>
              <Input
                id="aiTools"
                type="text"
                placeholder="e.g. Copilot, Cursor, Cody, Devin..."
                value={aiTools}
                onChange={(e) => setAiTools(e.target.value)}
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
                  Submitting...
                </span>
              ) : (
                <>
                  Apply for Private Beta
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>

            <p className="text-center text-muted-foreground text-sm mt-6">
              We review every application. You'll hear from us within 48 hours.
            </p>
          </form>
          </ScrollReveal>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 items-center text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Hands-on onboarding
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Direct roadmap input
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Founding member pricing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;

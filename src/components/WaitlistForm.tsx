import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";

const GOOGLE_FORM_ID = "1FAIpQLSfCfnUuapnd-ObgyytL8zZpqAKBoP3cWPeOLjF19C7a3rjhtQ";
const GOOGLE_FORM_ACTION_URL = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;

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
      const formData = new FormData();
      formData.append(FORM_ENTRY_IDS.name, name);
      formData.append(FORM_ENTRY_IDS.company, company);
      formData.append(FORM_ENTRY_IDS.email, email);

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
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="terminal-window">
              <div className="terminal-header">
                <span>APPLICATION RECEIVED</span>
                <span className="text-muted-foreground">STATUS: CONFIRMED</span>
              </div>
              <div className="terminal-body text-center py-12">
                <div className="w-16 h-16 border-2 border-primary flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-wider">
                  Welcome to the <span className="text-primary">Evolution</span>
                </h2>
                <p className="text-muted-foreground text-sm tracking-wide">
                  {'>'} You're now on the waitlist for MagmaAI. We'll reach out soon with exclusive access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="terminal-label block mb-4">// PRIVATE BETA</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wider">
                Onboarding select <span className="text-primary">R&D teams</span>
              </h2>
              <p className="text-muted-foreground text-sm tracking-wide">
                {'>'} Tell us about your team and we'll reach out within 48 hours. Early adopters get hands-on onboarding and direct input into the roadmap.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="terminal-window">
              <div className="terminal-header">
                <span>BETA APPLICATION FORM</span>
                <span className="text-muted-foreground">SUBMIT.001</span>
              </div>
              <div className="terminal-body">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="terminal-label block">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="bg-background border-border focus:border-primary focus:ring-primary rounded-none text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="terminal-label block">
                        Company *
                      </label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Your Company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                        className="bg-background border-border focus:border-primary focus:ring-primary rounded-none text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="terminal-label block">
                        Work Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-background border-border focus:border-primary focus:ring-primary rounded-none text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="teamSize" className="terminal-label block">
                        Engineering Team Size *
                      </label>
                      <select
                        id="teamSize"
                        value={teamSize}
                        onChange={(e) => setTeamSize(e.target.value)}
                        required
                        className="flex h-10 w-full border border-border bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-none"
                      >
                        <option value="" disabled>Select team size</option>
                        <option value="1-5">1–5 engineers</option>
                        <option value="6-20">6–20 engineers</option>
                        <option value="21-50">21–50 engineers</option>
                        <option value="50+">50+ engineers</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="aiTools" className="terminal-label block">
                      AI Coding Tools in Use
                    </label>
                    <Input
                      id="aiTools"
                      type="text"
                      placeholder="e.g. Copilot, Cursor, Cody, Devin..."
                      value={aiTools}
                      onChange={(e) => setAiTools(e.target.value)}
                      className="bg-background border-border focus:border-primary focus:ring-primary rounded-none text-sm"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="magma"
                    size="xl"
                    className="w-full tracking-widest uppercase text-sm"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      <>
                        Apply for Private Beta
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-center terminal-label mt-4">
                    {'>'} We review every application. Response within 48 hours.
                  </p>
                </form>
              </div>
            </div>
          </ScrollReveal>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 items-center">
            <div className="flex items-center gap-2 terminal-label">
              <span className="text-primary">■</span>
              Hands-on onboarding
            </div>
            <div className="flex items-center gap-2 terminal-label">
              <span className="text-primary">■</span>
              Direct roadmap input
            </div>
            <div className="flex items-center gap-2 terminal-label">
              <span className="text-primary">■</span>
              Founding member pricing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;

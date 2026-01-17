import { CheckCircle, Sparkles } from "lucide-react";

const WaitlistForm = () => {
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

          {/* Google Form Embed */}
          <div className="volcanic-glass rounded-2xl p-4 md:p-8">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfCfnUuapnd-ObgyytL8zZpqAKBoP3cWPeOLjF19C7a3rjhtQ/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg"
            >
              Loading…
            </iframe>
          </div>

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

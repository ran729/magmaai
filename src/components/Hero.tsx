import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroLogo from "@/assets/hero-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Terminal window */}
          <div className="terminal-window">
            <div className="terminal-header">
              <span>MAGMA.AI — MAIN TERMINAL</span>
              <span className="text-muted-foreground">PID 001</span>
            </div>
            <div className="terminal-body flex flex-col items-center text-center gap-6 md:gap-8 py-12 md:py-20">
              {/* Logo */}
              <img src={heroLogo} alt="MAI Logo" className="w-32 sm:w-44 md:w-56 lg:w-64 h-auto opacity-90" />

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider leading-tight">
                <span className="text-foreground">AI agents can code.</span>
                <br />
                <span className="text-foreground">They can't reach </span>
                <span className="text-primary glow-text">autonomy.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed tracking-wide">
                {'>'} The gap isn't intelligence — it's your unique organization's context, governance, and institutional knowledge. MagmaAI bridges it so engineers govern strategy, not keystrokes.
              </p>

              {/* CTA */}
              <div className="flex justify-center items-center pt-4">
                <Button variant="magma" size="xl" className="w-full sm:w-auto tracking-widest uppercase text-sm" asChild>
                  <a href="#waitlist">
                    Join the Waitlist
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border border-border flex items-start justify-center p-1.5">
          <div className="w-0.5 h-2 bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

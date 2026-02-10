import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroLogo from "@/assets/hero-logo.png";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6 md:gap-8">
          {/* Logo */}
          <img src={heroLogo} alt="MAI Logo" className="w-40 sm:w-56 md:w-72 lg:w-80 h-auto" />

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in tracking-wide leading-tight">
            <span className="text-foreground" style={{
              textShadow: '0 0 30px rgba(0,0,0,0.9), 0 0 60px rgba(0,0,0,0.7)'
            }}>Your AI agents can code. </span>
            <br />
            <span className="text-foreground" style={{
              textShadow: '0 0 30px rgba(0,0,0,0.9), 0 0 60px rgba(0,0,0,0.7)'
            }}>They just can't decide </span>
            <span className="gradient-magma-text glow-text">what</span>
            <span className="text-foreground" style={{
              textShadow: '0 0 30px rgba(0,0,0,0.9), 0 0 60px rgba(0,0,0,0.7)'
            }}> to code.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>MagmaAI gives coding agents the organizational context, governance, and institutional knowledge to work autonomously — so engineers govern strategy, not keystrokes.</p>

            {/* CTA Buttons */}
            <div className="flex justify-center items-center animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>
              <Button variant="magma" size="xl" className="w-full sm:w-auto" asChild>
                <a href="#waitlist">
                  Join the Waitlist
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>;
};
export default Hero;
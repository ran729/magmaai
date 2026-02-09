import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import volcanoBackground from "@/assets/volcano-background.png";
const Hero = () => {
  return <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${volcanoBackground})`
    }} />

      {/* Top Section - Headline */}
      <div className="relative z-10 pt-28 pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in tracking-wide leading-tight">
              <span className="text-foreground" style={{
              textShadow: '0 0 30px rgba(0,0,0,0.9), 0 0 60px rgba(0,0,0,0.7)'
            }}>The autonomous brain for </span>
              <span className="gradient-magma-text glow-text">AI-Native</span>
              <span className="text-foreground" style={{
              textShadow: '0 0 30px rgba(0,0,0,0.9), 0 0 60px rgba(0,0,0,0.7)'
            }}> R&D</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Middle Section - Spacer for Volcano */}
      <div className="flex-1" />

      {/* Bottom Section - Subheadline & CTAs */}
      <div className="relative z-10 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>Enable AI Agents to work autonomously across the SDLC
Built for ai agents, Governed by engineers.</p>

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
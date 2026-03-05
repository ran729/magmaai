import { Layers, Brain, RefreshCw, Database } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Solution = () => {
  const features = [
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Orchestration & Authorization Layer",
      description: "The operating system for AI-Native R&D. Sits between intent & strategy and your agentic swarm.",
      id: "ORCH",
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Spec-to-Insightful Code",
      description: "Converting human intent into structured data that agents can digest. Eliminating hallucinations and drift.",
      id: "SPEC",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Organizational Memory & Context",
      description: "Preventing knowledge decay, capturing architectural DNA. Agents don't just know syntax; they know YOUR business intent.",
      id: "MEMO",
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Closed-Loop Learning Flywheel",
      description: "The system analyzes the delta between plan and production. Velocity improves with every request.",
      id: "LOOP",
    },
  ];

  return (
    <section id="solution" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="terminal-label block mb-4">
              // SYSTEM ARCHITECTURE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wider">
              <span className="text-primary">speXAI:</span> Where Planning Meets Execution
            </h2>
            <p className="text-muted-foreground text-sm tracking-wide">
              The Source of Truth for every task and the Guardrail Engine for the organization.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="terminal-window">
              <div className="terminal-header">
                <span>DATA FLOW DIAGRAM</span>
                <span className="text-muted-foreground">ARCH.001</span>
              </div>
              <div className="terminal-body">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-full p-4 border border-border text-center">
                    <div className="terminal-label mb-1">INPUT</div>
                    <div className="font-bold text-sm tracking-wider">YOUR TEAM → INTENT & STRATEGY</div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-4 bg-primary" />
                    <span className="text-primary text-xs">▼</span>
                    <div className="w-px h-4 bg-primary" />
                  </div>
                  <div className="w-full p-6 border-2 border-primary text-center glow-magma">
                    <div className="terminal-label mb-1">PROCESS</div>
                    <div className="font-bold text-lg tracking-wider text-primary">MAGMA.AI — ORCHESTRATION LAYER</div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-4 bg-primary" />
                    <span className="text-primary text-xs">▼</span>
                    <div className="w-px h-4 bg-primary" />
                  </div>
                  <div className="w-full p-4 border border-border text-center">
                    <div className="terminal-label mb-1">OUTPUT</div>
                    <div className="font-bold text-sm tracking-wider">EXECUTION → AGENTIC SWARM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="terminal-window hover-glow group h-full">
                <div className="terminal-header">
                  <span className="flex items-center gap-2">
                    <span className="text-primary">{feature.icon}</span>
                    MODULE.{feature.id}
                  </span>
                  <span className="text-muted-foreground">ACTIVE</span>
                </div>
                <div className="terminal-body">
                  <h3 className="font-bold text-sm tracking-wider mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;

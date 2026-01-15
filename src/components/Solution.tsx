import { Layers, Brain, RefreshCw, Database } from "lucide-react";

const Solution = () => {
  const features = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Orchestration & Authorization Layer",
      description: "The operating system for AI-Native R&D. Sits between intent & strategy and your agentic swarm.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Spec-to-Insightful Code",
      description: "Converting human intent into structured data that agents can digest. Eliminating hallucinations and drift.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Organizational Memory & Context",
      description: "Preventing knowledge decay, capturing architectural DNA. Agents don't just know syntax; they know YOUR business intent.",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Closed-Loop Learning Flywheel",
      description: "The system analyzes the delta between plan and production. Velocity improves with every request.",
    },
  ];

  return (
    <section id="solution" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            The Solution
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-magma-text">speXAI:</span> Where Planning Meets Execution
          </h2>
          <p className="text-muted-foreground text-lg">
            The Source of Truth for every task and the Guardrail Engine for the organization.
          </p>
        </div>

        {/* Architecture Visualization */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="volcanic-glass rounded-2xl p-8 md:p-12">
            <div className="flex flex-col items-center gap-6">
              {/* Intent Layer */}
              <div className="w-full p-6 rounded-xl border border-muted text-center">
                <div className="text-sm text-muted-foreground mb-2">Your Team</div>
                <div className="font-display font-bold text-lg">Intent & Strategy</div>
              </div>
              
              {/* Arrow */}
              <div className="w-1 h-8 gradient-magma rounded-full" />
              
              {/* MagmaAI Layer */}
              <div className="w-full p-8 rounded-xl gradient-magma text-center glow-magma">
                <div className="text-sm text-primary-foreground/80 mb-2">MagmaAI</div>
                <div className="font-display font-bold text-2xl text-primary-foreground">Orchestration & Authorization Layer</div>
              </div>
              
              {/* Arrow */}
              <div className="w-1 h-8 gradient-magma rounded-full" />
              
              {/* Agentic Swarm */}
              <div className="w-full p-6 rounded-xl border border-muted text-center">
                <div className="text-sm text-muted-foreground mb-2">Execution</div>
                <div className="font-display font-bold text-lg">Agentic Swarm</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="volcanic-glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover-glow group flex gap-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                <span className="text-primary">{feature.icon}</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;

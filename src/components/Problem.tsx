import { AlertTriangle, TrendingDown, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Problem = () => {
  const problems = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "The Velocity Trap",
      stat: "84%",
      statLabel: "Use AI",
      description: "Without governance, velocity creates architectural chaos. 46% of developers do not trust AI output.",
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "The Delegation Barrier",
      stat: "10X",
      statLabel: "Supervision Needed",
      description: "We moved from spoons to shovels, but engineers are still stuck inside the machine. Cannot safely delegate without deep supervision.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "The Shovel Paradox",
      stat: "LIMITED",
      statLabel: "Scalability",
      description: "The Copilot era is over. Adding agents without orchestration breaks the entire system.",
    },
  ];

  return (
    <section id="problem" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="terminal-label block mb-4">
              // DIAGNOSTIC REPORT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wider">
              The Era of <span className="text-primary">Manual Coding</span> is Over
            </h2>
            <p className="text-muted-foreground text-sm tracking-wide">
              Organizations are stuck between the old world of manual coding and the new world of scalable orchestration.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-4">
          {problems.map((problem, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="terminal-window hover-glow group h-full">
                <div className="terminal-header">
                  <span className="flex items-center gap-2">
                    <span className="text-primary">{problem.icon}</span>
                    {problem.title}
                  </span>
                  <span className="text-muted-foreground">ERR.{String(index + 1).padStart(3, '0')}</span>
                </div>
                <div className="terminal-body">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-primary">{problem.stat}</span>
                    <span className="terminal-label">{problem.statLabel}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-16 terminal-window">
            <div className="terminal-header">
              <span>EVOLUTION TIMELINE</span>
              <span className="text-muted-foreground">SYS.HISTORY</span>
            </div>
            <div className="terminal-body">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center opacity-40">
                  <div className="text-4xl mb-3">🥄</div>
                  <div className="font-bold text-sm tracking-wider mb-1">THE SPOON ERA</div>
                  <div className="terminal-label">Manual Coding</div>
                </div>
                <div className="text-center opacity-60">
                  <div className="text-4xl mb-3">🔧</div>
                  <div className="font-bold text-sm tracking-wider mb-1">THE SHOVEL ERA</div>
                  <div className="terminal-label">Copilot / Code Completion</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3 animate-pulse-glow">⚡</div>
                  <div className="font-bold text-sm tracking-wider mb-1 text-primary">THE EXCAVATOR ERA</div>
                  <div className="terminal-label">Agentic Workforce</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Problem;

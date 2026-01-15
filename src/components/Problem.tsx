import { AlertTriangle, TrendingDown, Users } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "The Velocity Trap",
      stat: "84%",
      statLabel: "Use AI",
      description: "Without governance, velocity creates architectural chaos. 46% of developers do not trust AI output.",
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "The Delegation Barrier",
      stat: "10X",
      statLabel: "Supervision Needed",
      description: "We moved from spoons to shovels, but engineers are still stuck inside the machine. Cannot safely delegate without deep supervision.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "The Shovel Paradox",
      stat: "Limited",
      statLabel: "Scalability",
      description: "The Copilot era is over. Adding agents without orchestration breaks the entire system.",
    },
  ];

  return (
    <section id="problem" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-volcanic-surface" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            The Agentic Inflection Point
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            The Era of <span className="gradient-magma-text">Manual Coding</span> is Over
          </h2>
          <p className="text-muted-foreground text-lg">
            Organizations are stuck between the old world of manual coding and the new world of scalable orchestration.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="volcanic-glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl gradient-magma flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {problem.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{problem.title}</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold gradient-magma-text">{problem.stat}</span>
                <span className="text-muted-foreground text-sm">{problem.statLabel}</span>
              </div>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Evolution Timeline */}
        <div className="mt-20 volcanic-glass rounded-2xl p-8 md:p-12">
          <h3 className="font-display text-2xl font-bold text-center mb-12">The Evolution of Engineering</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center opacity-50">
              <div className="text-5xl mb-4">🥄</div>
              <div className="font-display font-bold mb-2">The Spoon Era</div>
              <div className="text-muted-foreground text-sm">Manual Coding</div>
            </div>
            <div className="text-center opacity-70">
              <div className="text-5xl mb-4">🔧</div>
              <div className="font-display font-bold mb-2">The Shovel Era</div>
              <div className="text-muted-foreground text-sm">Copilot / Code Completion</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 animate-pulse-glow">⚡</div>
              <div className="font-display font-bold mb-2 gradient-magma-text">The Excavator Era</div>
              <div className="text-muted-foreground text-sm">Agentic Workforce</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;

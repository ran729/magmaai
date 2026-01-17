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
        <div className="mt-20">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-16">
            The Evolution of Engineering
          </h3>

          <div className="relative">
            {/* Flowing Lava Path */}
            <div className="absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-primary/40 to-primary rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/60 to-primary animate-pulse" />
              </div>
              {/* Flowing particles effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-3 h-3 rounded-full bg-primary/80 blur-sm animate-flow-1" style={{ top: '-2px', left: '10%' }} />
                <div className="absolute w-2 h-2 rounded-full bg-magma-glow/60 blur-sm animate-flow-2" style={{ top: '-1px', left: '30%' }} />
                <div className="absolute w-3 h-3 rounded-full bg-primary/80 blur-sm animate-flow-3" style={{ top: '-2px', left: '50%' }} />
                <div className="absolute w-2 h-2 rounded-full bg-magma-glow/60 blur-sm animate-flow-4" style={{ top: '-1px', left: '70%' }} />
              </div>
            </div>

            {/* Evolution Stages */}
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {/* Spoon Era - Cold/Dark */}
              <div className="group relative">
                <div className="volcanic-glass rounded-2xl p-8 border border-gray-800/50 hover:border-gray-600/50 transition-all duration-500">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="text-4xl relative z-10">🥄</span>
                    </div>
                    {/* Progress indicator */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gray-700 border-2 border-volcanic-surface hidden md:block" />
                  </div>

                  <div className="text-center space-y-3">
                    <h4 className="font-display text-xl font-bold text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      The Spoon Era
                    </h4>
                    <p className="text-sm text-muted-foreground">Manual Coding</p>
                    <div className="pt-4 border-t border-gray-800/50">
                      <p className="text-xs text-gray-600 group-hover:text-gray-500 transition-colors duration-300">
                        Line by line, character by character
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shovel Era - Warming Up */}
              <div className="group relative">
                <div className="volcanic-glass rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-500 hover-glow">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-magma-red/30 to-primary/30 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="text-4xl relative z-10">🔧</span>
                      {/* Subtle glow */}
                      <div className="absolute inset-0 blur-xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    {/* Progress indicator */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/60 border-2 border-volcanic-surface hidden md:block animate-pulse" />
                  </div>

                  <div className="text-center space-y-3">
                    <h4 className="font-display text-xl font-bold text-primary/80 group-hover:text-primary transition-colors duration-300">
                      The Shovel Era
                    </h4>
                    <p className="text-sm text-muted-foreground">Copilot / Code Completion</p>
                    <div className="pt-4 border-t border-primary/10">
                      <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                        Faster digging, same manual labor
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Excavator Era - Full Power */}
              <div className="group relative">
                <div className="volcanic-glass rounded-2xl p-8 border border-primary/40 hover:border-primary transition-all duration-500 relative overflow-hidden">
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-magma-red/5 via-primary/10 to-magma-glow/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-magma opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

                  {/* Icon Container */}
                  <div className="relative mb-6 z-10">
                    <div className="w-20 h-20 mx-auto rounded-2xl gradient-magma flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500 glow-magma">
                      <span className="text-4xl relative z-10 animate-pulse-glow">⚡</span>
                      {/* Intense glow */}
                      <div className="absolute inset-0 blur-2xl bg-primary opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                    </div>
                    {/* Progress indicator - bright */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-volcanic-surface hidden md:block shadow-[0_0_10px_rgba(237,106,37,0.8)] animate-pulse" />
                  </div>

                  <div className="text-center space-y-3 relative z-10">
                    <h4 className="font-display text-xl font-bold gradient-magma-text">
                      The Excavator Era
                    </h4>
                    <p className="text-sm text-muted-foreground">Agentic Workforce</p>
                    <div className="pt-4 border-t border-primary/20">
                      <p className="text-xs text-gray-400 font-semibold">
                        Orchestrated autonomy at scale
                      </p>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;

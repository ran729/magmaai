import { Linkedin } from "lucide-react";

const Team = () => {
  const founders = [
    {
      name: "Matan Zur",
      role: "CEO",
      background: "Former CTO at Similarweb",
      achievement: "Architected Similarweb's Data Partnership Vertical. Scaled from $0 to $80M ARR in 4 years.",
      education: "Technion University",
    },
    {
      name: "Ran Sasportas",
      role: "CTO",
      background: "Elite IDF Unit Veteran",
      achievement: "15+ years R&D. Led Engineering for Similarweb's $80M Data Vertical.",
      education: "Engineering Excellence",
    },
  ];

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Leadership
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Founders Who <span className="gradient-magma-text">Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Combining the pain of the past with the architecture of the future.
          </p>
        </div>

        {/* Founder Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="volcanic-glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover-glow group"
            >
              {/* Avatar Placeholder */}
              <div className="w-20 h-20 rounded-full gradient-magma mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">
                  {founder.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              
              <h3 className="font-display text-2xl font-bold mb-1">{founder.name}</h3>
              <div className="text-primary font-semibold mb-4">{founder.role}</div>
              
              <div className="space-y-3 text-muted-foreground">
                <p className="font-medium text-foreground">{founder.background}</p>
                <p>{founder.achievement}</p>
              </div>

              <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{founder.education}</span>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Our Edge */}
        <div className="mt-20 volcanic-glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-center mb-8">Our Edge</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <div className="font-display font-bold mb-2">Deep Scaling</div>
              <div className="text-muted-foreground text-sm">Proprietary Experience</div>
            </div>
            <div>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <div className="font-display font-bold mb-2">AI-Native</div>
              <div className="text-muted-foreground text-sm">Architecture</div>
            </div>
            <div>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <div className="font-display font-bold mb-2">Market Timing</div>
              <div className="text-muted-foreground text-sm">Agentic Era</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

import { Linkedin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Team = () => {
  const founders = [
    {
      name: "Matan Zur",
      role: "CEO",
      background: "Former CTO at Similarweb",
      achievement: "Architected Similarweb's Data Partnership Vertical. Scaled from $0 to $80M ARR in 4 years.",
      education: "Technion University",
      handle: "matan_zur",
    },
    {
      name: "Ran Sasportas",
      role: "CTO",
      background: "Elite IDF Unit Veteran",
      achievement: "15+ years R&D. Led Engineering for Similarweb's $80M Data Vertical.",
      education: "Engineering Excellence",
      handle: "ran_sas",
    },
  ];

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="terminal-label block mb-4">
              // TEAM MANIFEST
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wider">
              Founders Who <span className="text-primary">Scale</span>
            </h2>
            <p className="text-muted-foreground text-sm tracking-wide">
              Combining the pain of the past with the architecture of the future.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className="terminal-window hover-glow group h-full">
                <div className="terminal-header">
                  <span>@{founder.handle}</span>
                  <span className="text-muted-foreground">{founder.role}</span>
                </div>
                <div className="terminal-body">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 border border-primary flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-primary">
                        {founder.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm tracking-wider">{founder.name}</h3>
                      <div className="text-primary text-xs tracking-widest uppercase">{founder.role}</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-foreground font-medium">{founder.background}</p>
                    <p className="text-muted-foreground leading-relaxed">{founder.achievement}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <span className="terminal-label">{founder.education}</span>
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

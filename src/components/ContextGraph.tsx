const ContextGraph = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-volcanic-surface" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Unique Advantage
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            The <span className="gradient-magma-text">Trillion-Dollar</span> Opportunity
          </h2>
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-8 text-muted-foreground">
            The Context Graph
          </h3>
          
          <div className="volcanic-glass rounded-2xl p-8 md:p-12 text-left max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              It is not about the LLM. It is about the <span className="text-foreground font-semibold">system of record</span> that captures the intent around it.
            </p>
            <p className="text-xl font-display font-bold gradient-magma-text">
              This is what we own.
            </p>
          </div>

          {/* Visual Representation */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] rounded-full border border-primary/20 animate-pulse-glow" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[300px] rounded-full border border-primary/30" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[200px] h-[200px] rounded-full gradient-magma opacity-20" />
            </div>
            <div className="relative flex items-center justify-center h-[400px]">
              <div className="volcanic-glass rounded-2xl p-8 glow-magma">
                <div className="font-display text-2xl font-bold gradient-magma-text">Context Graph</div>
                <div className="text-muted-foreground mt-2">Intent • Architecture • History</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContextGraph;

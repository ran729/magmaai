import { useEffect, useRef, useState } from "react";
import { Code2, Zap, Cpu } from "lucide-react";

const EvolutionVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeEra, setActiveEra] = useState<number>(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Particle system
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      color: string;

      constructor(x: number, y: number, era: number) {
        this.x = x;
        this.y = y;

        // Different behaviors per era
        if (era === 0) {
          // Spoon: slow, single particles
          this.vx = (Math.random() - 0.5) * 0.5;
          this.vy = -Math.random() * 0.5;
          this.size = 2;
          this.color = "rgba(100, 100, 100, 0.6)";
        } else if (era === 1) {
          // Shovel: faster, more particles
          this.vx = (Math.random() - 0.5) * 2;
          this.vy = -Math.random() * 2;
          this.size = 3;
          this.color = Math.random() > 0.5
            ? "rgba(237, 106, 37, 0.6)"
            : "rgba(200, 150, 100, 0.6)";
        } else {
          // Excavator: explosive, many particles
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 4 + 2;
          this.vx = Math.cos(angle) * speed;
          this.vy = Math.sin(angle) * speed - 2;
          this.size = Math.random() * 4 + 2;

          const colors = [
            "rgba(237, 106, 37, 0.8)",
            "rgba(207, 46, 46, 0.8)",
            "rgba(255, 187, 85, 0.8)",
          ];
          this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        this.life = 0;
        this.maxLife = era === 0 ? 60 : era === 1 ? 80 : 100;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.05; // gravity
        this.life++;
        return this.life < this.maxLife;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const alpha = 1 - (this.life / this.maxLife);
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow for excavator era
        if (this.color.includes("237") || this.color.includes("207")) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = this.color;
          ctx.fill();
        }
        ctx.restore();
      }
    }

    let particles: Particle[] = [];
    let frameCount = 0;
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Spawn rates per era
    const getSpawnRate = (era: number) => {
      if (era === 0) return 120; // Slow: every 120 frames
      if (era === 1) return 20;  // Medium: every 20 frames
      return 3;                   // Fast: every 3 frames (explosive!)
    };

    // Spawn count per cycle
    const getSpawnCount = (era: number) => {
      if (era === 0) return 1;   // One at a time
      if (era === 1) return 3;   // Few at a time
      return 8;                   // Many at once (swarm!)
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      frameCount++;

      // Spawn new particles based on era
      const spawnRate = getSpawnRate(activeEra);
      const spawnCount = getSpawnCount(activeEra);

      if (frameCount % spawnRate === 0) {
        const spawnX = activeEra === 0
          ? width * 0.2
          : activeEra === 1
            ? width * 0.5
            : width * 0.8;

        for (let i = 0; i < spawnCount; i++) {
          particles.push(new Particle(
            spawnX + (Math.random() - 0.5) * 40,
            height * 0.7,
            activeEra
          ));
        }
      }

      // Update and draw particles
      particles = particles.filter(particle => {
        const alive = particle.update();
        if (alive) {
          particle.draw(ctx);
        }
        return alive;
      });

      // Draw era-specific base visualization
      drawEraBase(ctx, width, height, activeEra, frameCount);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const drawEraBase = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      era: number,
      frame: number
    ) => {
      const baseY = height * 0.7;

      if (era === 0) {
        // Spoon: Single person icon, small pile
        ctx.fillStyle = "rgba(100, 100, 100, 0.3)";
        ctx.fillRect(width * 0.15, baseY, width * 0.1, 3);

        // Tiny progress bar
        ctx.fillStyle = "rgba(150, 150, 150, 0.5)";
        const progress = (frame % 120) / 120;
        ctx.fillRect(width * 0.15, baseY - 20, width * 0.1 * progress, 2);

      } else if (era === 1) {
        // Shovel: Progress bar moving
        ctx.fillStyle = "rgba(237, 106, 37, 0.2)";
        ctx.fillRect(width * 0.35, baseY, width * 0.3, 5);

        // Moving progress
        ctx.fillStyle = "rgba(237, 106, 37, 0.6)";
        const progress = (frame % 100) / 100;
        ctx.fillRect(width * 0.35, baseY - 30, width * 0.3 * progress, 3);

      } else {
        // Excavator: Multiple streams, network visualization
        const centerX = width * 0.8;
        const centerY = baseY;

        // Draw pulsing core
        const pulseSize = 20 + Math.sin(frame * 0.05) * 5;
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, pulseSize);
        gradient.addColorStop(0, "rgba(237, 106, 37, 0.8)");
        gradient.addColorStop(0.5, "rgba(237, 106, 37, 0.4)");
        gradient.addColorStop(1, "rgba(237, 106, 37, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(centerX, centerY, pulseSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw energy waves
        for (let i = 0; i < 3; i++) {
          const waveRadius = ((frame + i * 30) % 150);
          ctx.strokeStyle = `rgba(237, 106, 37, ${0.3 - waveRadius / 500})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(centerX, centerY, waveRadius, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [activeEra]);

  // Auto-cycle through eras
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEra(prev => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const eras = [
    {
      icon: Code2,
      title: "The Spoon Era",
      subtitle: "Manual Coding",
      description: "One line at a time. One developer. Slow, tedious, limited.",
      output: "~10 lines/hour",
      scale: "1x",
      color: "text-gray-400",
      bgColor: "from-gray-800 to-gray-900",
      index: 0,
    },
    {
      icon: Zap,
      title: "The Shovel Era",
      subtitle: "AI-Assisted Coding",
      description: "Faster typing. Still manual. Still in the loop. Still limited.",
      output: "~100 lines/hour",
      scale: "10x",
      color: "text-primary/80",
      bgColor: "from-magma-red/30 to-primary/30",
      index: 1,
    },
    {
      icon: Cpu,
      title: "The Excavator Era",
      subtitle: "Agentic Orchestration",
      description: "Autonomous swarms. Parallel execution. Exponential output. TRUE delegation.",
      output: "Unlimited",
      scale: "∞",
      color: "gradient-magma-text",
      bgColor: "gradient-magma",
      index: 2,
    },
  ];

  return (
    <div className="mt-20">
      <h3 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">
        The Evolution of Engineering
      </h3>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Watch how engineering productivity has evolved from manual labor to autonomous orchestration
      </p>

      {/* Canvas Visualization */}
      <div className="relative mb-12 rounded-2xl overflow-hidden" style={{ height: "400px" }}>
        <canvas
          ref={canvasRef}
          className="w-full h-full bg-gradient-to-b from-volcanic-surface to-black"
        />

        {/* Era Indicator Overlay */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
          {eras.map((era, idx) => (
            <div
              key={idx}
              className={`text-center transition-all duration-500 ${
                activeEra === idx ? "opacity-100 scale-110" : "opacity-40 scale-90"
              }`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-2 ${
                activeEra === idx ? era.bgColor : "bg-gray-800"
              }`}>
                <era.icon className={`w-6 h-6 ${activeEra === idx ? "text-white" : "text-gray-600"}`} />
              </div>
              <div className={`text-xs font-bold ${activeEra === idx ? era.color : "text-gray-600"}`}>
                {era.scale}
              </div>
            </div>
          ))}
        </div>

        {/* Output Counter */}
        <div className="absolute bottom-4 right-4 volcanic-glass rounded-xl px-6 py-3">
          <div className="text-xs text-muted-foreground mb-1">Output Rate</div>
          <div className={`text-2xl font-bold ${eras[activeEra].color}`}>
            {eras[activeEra].output}
          </div>
        </div>
      </div>

      {/* Era Details Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {eras.map((era, idx) => {
          const Icon = era.icon;
          return (
            <button
              key={idx}
              onClick={() => setActiveEra(idx)}
              className={`volcanic-glass rounded-2xl p-6 text-left transition-all duration-500 hover:scale-105 relative overflow-hidden group ${
                activeEra === idx
                  ? "border-2 border-primary shadow-lg shadow-primary/20"
                  : "border border-gray-800/50 hover:border-primary/30"
              }`}
            >
              {/* Active indicator */}
              {activeEra === idx && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              )}

              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 bg-gradient-to-br ${era.bgColor}`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h4 className={`font-display text-xl font-bold mb-1 ${era.color}`}>
                  {era.title}
                </h4>
                <p className="text-sm text-primary/60 mb-3">{era.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {era.description}
                </p>

                {/* Scale badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 border border-primary/20">
                  <span className="text-xs text-muted-foreground">Scale:</span>
                  <span className={`text-sm font-bold ${era.color}`}>{era.scale}</span>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mt-8">
        {[0, 1, 2].map((idx) => (
          <button
            key={idx}
            onClick={() => setActiveEra(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeEra === idx
                ? "w-8 bg-primary"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EvolutionVisualization;

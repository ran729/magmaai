import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-border py-3"
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground tracking-[0.3em] uppercase">SYS</span>
          <span className="font-display text-lg font-bold text-primary tracking-wider">
            MAGMA.AI
          </span>
          <span className="text-xs text-muted-foreground tracking-[0.2em]">v0.1</span>
        </a>

        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-xs text-muted-foreground tracking-widest uppercase">
            STATUS: ONLINE
          </span>
          <Button variant="magma" size="sm" className="tracking-widest text-xs uppercase" asChild>
            <a href="#waitlist">Join Waitlist</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

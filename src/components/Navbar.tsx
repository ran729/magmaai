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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "volcanic-glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold gradient-magma-text">
            MagmaAI
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="flex items-center">
          <Button variant="magma" size="sm" asChild>
            <a href="#waitlist">Join Waitlist</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

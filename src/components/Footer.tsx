const Footer = () => {
  return (
    <footer className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold gradient-magma-text">
              MagmaAI
            </span>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-sm text-center">
            The Authority for AI-Native R&D
          </p>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © 2025 MagmaAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

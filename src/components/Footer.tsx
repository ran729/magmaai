const Footer = () => {
  return (
    <footer className="py-6 relative overflow-hidden border-t border-border">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-primary font-bold text-sm tracking-wider">MAGMA.AI</span>
          </div>
          <p className="terminal-label text-center">
            The Authority for AI-Native R&D
          </p>
          <p className="terminal-label">
            © 2025 MagmaAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

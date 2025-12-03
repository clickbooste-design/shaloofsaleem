import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 border-t border-border/50 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="floating-orb w-48 h-48 bottom-0 left-1/4 opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold gradient-text">
            Shaloof.
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-3">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="w-10 h-10 rounded-lg bg-card/60 border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all duration-300 text-muted-foreground"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-border/30 text-center"
        >
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            © {currentYear} Shaloof Saleem. Made with <Heart size={14} className="text-primary" /> in Dubai
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

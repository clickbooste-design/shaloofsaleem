import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8 py-16 pt-24 sm:pt-28 md:pt-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-orb w-96 h-96 top-1/4 -left-48 animate-float" />
        <div className="floating-orb w-72 h-72 bottom-1/4 -right-36 animate-float-delayed" />
        <div className="floating-orb w-48 h-48 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground text-lg mb-4"
            >
              I AM SHALOOF SALEEM
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <span className="gradient-text glow-text">Web Developer</span>
              <br />
              <span className="text-foreground">&</span>
              <br />
              <span className="gradient-text glow-text">Marketing Expert</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-lg"
            >
              Driving measurable growth through strategy, creativity & innovation. 
              I transform brands into market leaders with data-driven campaigns and 
              high-performance websites.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <a
                href="#projects"
                className="glow-button bg-primary text-primary-foreground px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-center text-sm sm:text-base"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="glass-card px-6 sm:px-8 py-3 rounded-lg font-semibold text-foreground transition-all duration-300 hover:border-primary/50 hover:scale-105 text-center text-sm sm:text-base"
              >
                Work With Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex gap-4"
            >
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="glass-card p-3 rounded-lg hover:border-primary/50 transition-all duration-300 hover:scale-110 text-muted-foreground hover:text-primary"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Abstract Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-96 h-96">
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-primary/20 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-primary/10 animate-[spin_25s_linear_infinite]" />
              
              {/* Center glow */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary/20 to-cyan-400/20 blur-2xl" />
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 right-8 glass-card p-3 rounded-lg"
              >
                <span className="text-primary text-sm font-semibold">+250%</span>
                <p className="text-muted-foreground text-xs">ROI</p>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-12 left-4 glass-card p-3 rounded-lg"
              >
                <span className="text-primary text-sm font-semibold">50+</span>
                <p className="text-muted-foreground text-xs">Projects</p>
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary"
              >
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

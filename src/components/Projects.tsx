import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Globe, ShoppingCart, BarChart3, Layout, FileText, Palette } from "lucide-react";

const projects = [
  {
    title: "RealTouch Office Furniture",
    description: "Developed e-commerce platform with WordPress & Shopify, fully SEO optimized for maximum visibility.",
    tags: ["WordPress", "Shopify", "SEO"],
    icon: ShoppingCart,
    color: "from-cyan-400 to-blue-500",
    link: "https://realtouchfurniture.ae",
  },
  {
    title: "Marketing Automation Dashboard",
    description: "Python & Django backend dashboard that boosted lead tracking efficiency by 40%.",
    tags: ["Python", "Django", "Analytics"],
    icon: BarChart3,
    color: "from-emerald-400 to-cyan-500",
    link: "#",
  },
  {
    title: "NESA Boutique E-Commerce",
    description: "Fashion e-commerce store with custom design, payment integration, and inventory management.",
    tags: ["WooCommerce", "Design", "UI/UX"],
    icon: Palette,
    color: "from-pink-400 to-rose-500",
    link: "https://nesaboutique.ae",
  },
  {
    title: "SEO Campaign - Local Business",
    description: "Comprehensive SEO strategy that increased organic traffic by 70% in just 6 months.",
    tags: ["SEO", "Google Ads", "Analytics"],
    icon: Globe,
    color: "from-orange-400 to-amber-500",
    link: "#",
  },
  {
    title: "Product Catalog System",
    description: "Digital catalog and presentation system for enterprise furniture solutions.",
    tags: ["React", "Design", "PDF"],
    icon: FileText,
    color: "from-violet-400 to-purple-500",
    link: "#",
  },
  {
    title: "Portfolio Website Design",
    description: "Modern, responsive portfolio website with high conversion design and animations.",
    tags: ["React", "Framer Motion", "Tailwind"],
    icon: Layout,
    color: "from-teal-400 to-cyan-500",
    link: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="relative px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="floating-orb w-80 h-80 bottom-0 left-1/4 animate-float-delayed opacity-15" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            A showcase of my best work in web development, e-commerce, and digital marketing
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div className="glass-card h-full p-4 sm:p-6 rounded-xl hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                {/* Icon */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Dynamic Link Added */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  View Project <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

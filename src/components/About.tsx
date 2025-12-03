import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileImage from "@/assets/profile.jpg";

const skills = [
  { category: "Web Development", items: ["HTML", "CSS", "JavaScript", "React", "Python", "Django", "Flask"] },
  { category: "Digital Marketing", items: ["SEO", "Meta Ads", "Google Ads", "Analytics", "Content Strategy"] },
  { category: "E-Commerce", items: ["Shopify", "WordPress", "WooCommerce", "Magento"] },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="about" className="relative px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="floating-orb w-64 h-64 top-1/4 right-0 animate-float opacity-20" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Passionate about creating digital experiences that drive results
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-cyan-400 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative p-2 rounded-2xl glow-border">
                <img
                  src={profileImage}
                  alt="Shaloof Saleem - Web Developer and Digital Marketing Manager"
                  className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-xl"
                />
              </div>
              
              {/* Floating badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-lg"
              >
                <span className="text-primary font-bold">5+</span>
                <span className="text-muted-foreground text-sm ml-1">Years Exp.</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
              I'm Shaloof Saleem, a passionate <span className="text-primary">Web Developer & Digital Marketing Manager</span> based 
              in Dubai. I specialize in creating high-performance websites, e-commerce platforms, 
              and digital campaigns that drive measurable results.
            </p>

            <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              With expertise spanning from frontend development to SEO optimization and paid advertising, 
              I bring a unique blend of technical skills and marketing acumen to every project. 
              My goal is to help businesses grow their online presence and achieve their digital goals.
            </p>

            {/* Skills */}
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <h4 className="text-sm font-semibold text-primary mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="glass-card px-3 py-1 rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

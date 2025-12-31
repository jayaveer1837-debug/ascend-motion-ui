import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Factory, Users, Briefcase, Code, Monitor, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import aboutStudent from "@/assets/about-student.jpg";

const highlights = [
  {
    icon: Factory,
    title: "Industry-Focused Training",
    description: "Real-time tools & practical approach"
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Trainers with real industry experience"
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description: "Resume, interviews & placements"
  }
];

const floatingIcons = [
  { icon: Code, delay: 0, position: "top-4 -right-4", color: "bg-accent" },
  { icon: Monitor, delay: 0.5, position: "-bottom-2 -left-2", color: "bg-primary" },
  { icon: Rocket, delay: 1, position: "top-1/4 -left-6", color: "bg-foreground" },
];

export const AboutSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Blue background container */}
        <div className="relative bg-primary rounded-2xl md:rounded-3xl overflow-visible">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16">
            
            {/* Left Column - Circular Image extending outside */}
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative perspective-1000 order-2 lg:order-1 flex items-center justify-center lg:justify-start lg:-ml-20"
            >
              <motion.div
                style={{ rotateX, rotateY }}
                className="relative preserve-3d"
              >
                {/* Main Circle Container */}
                <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px]">
                  
                  {/* Outer glow ring */}
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-background/20 blur-sm"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Dark circle background */}
                  <div className="absolute inset-2 rounded-full bg-foreground shadow-2xl" />
                  
                  {/* Main image circle */}
                  <div className="absolute inset-6 md:inset-8 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                    <img
                      src={aboutStudent}
                      alt="Student learning IT"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating Icons with smooth animations */}
                  {floatingIcons.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + item.delay * 0.3 }}
                      animate={{ 
                        y: [0, -8, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      whileHover={{ scale: 1.2 }}
                      className={`absolute ${item.position} w-10 h-10 md:w-12 md:h-12 rounded-xl ${item.color} shadow-lg flex items-center justify-center cursor-pointer`}
                      style={{ transition: "transform 0.3s ease" }}
                    >
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ 
                          duration: 2 + index * 0.5, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: item.delay 
                        }}
                      >
                        <item.icon className="w-5 h-5 md:w-6 md:h-6 text-background" />
                      </motion.div>
                    </motion.div>
                  ))}

                  {/* Decorative circles */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 right-8 w-6 h-6 rounded-full bg-accent shadow-md"
                  />
                  
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-8 right-0 w-4 h-4 rounded-full border-2 border-accent"
                  />

                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-background px-5 py-2.5 rounded-full shadow-xl border border-border whitespace-nowrap"
                  >
                    <span className="text-xs md:text-sm font-bold text-foreground">10+ Years of <span className="text-accent">Excellence</span></span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 order-1 lg:order-2 text-center lg:text-left"
            >
              {/* Section Label */}
              <span className="inline-block px-4 py-1.5 bg-background/20 text-background text-xs font-semibold rounded-full uppercase tracking-wide">
                About Us
              </span>

              {/* Main Heading */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-background leading-tight">
                Building <span className="text-accent">Careers</span>, Not Just Courses
              </h2>

              {/* Description */}
              <p className="text-sm md:text-base text-background/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
                We are a professional IT training institute focused on real-world skills, 
                industry-level projects, and career outcomes. Our mission is to make students 
                job-ready with confidence.
              </p>

              {/* Highlight Cards */}
              <div className="grid sm:grid-cols-3 gap-3 pt-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group bg-background/10 backdrop-blur-sm p-4 rounded-xl border border-background/20 hover:bg-background/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/20 group-hover:bg-accent/30 flex items-center justify-center mb-3 transition-colors duration-300 mx-auto lg:mx-0">
                      <item.icon className="w-5 h-5 text-accent group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <h4 className="text-xs md:text-sm font-semibold text-background mb-1">{item.title}</h4>
                    <p className="text-xs text-background/70 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="pt-2"
              >
                <Button 
                  variant="outline" 
                  className="border-background text-background hover:bg-background hover:text-primary transition-all duration-300 font-semibold"
                >
                  Know More About Us
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

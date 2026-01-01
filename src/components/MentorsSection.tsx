import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const mentors = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Full Stack Lead",
    experience: "12 Years at Google & Amazon",
    expertise: "MERN Stack, System Design",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "AI/ML Architect",
    experience: "10 Years at Microsoft",
    expertise: "Deep Learning, NLP",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Arjun Patel",
    role: "Cloud Solutions Expert",
    experience: "15 Years at AWS & IBM",
    expertise: "AWS, DevOps, Kubernetes",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Data Science Lead",
    experience: "11 Years at Netflix",
    expertise: "Python, ML, Analytics",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "DevOps Architect",
    experience: "13 Years at Cisco",
    expertise: "CI/CD, Docker, Jenkins",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
  },
];

export const MentorsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3">
            <span className="text-foreground">Learn from </span>
            <span className="text-primary">Industry </span>
            <span className="text-accent">Experts</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Our mentors bring real-world experience from top tech companies
          </p>
        </motion.div>

        {/* Desktop: 2-3 columns grid with horizontal cards */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="group flex items-center gap-4 bg-card border border-border rounded-xl p-3 hover:shadow-lg hover:border-primary/40 transition-all duration-300"
            >
              {/* Image - Left Side */}
              <motion.div 
                className="relative flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden ring-2 ring-primary/20 group-hover:ring-accent/50 transition-all duration-300">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Linkedin className="w-3 h-3 text-primary-foreground" />
                </motion.a>
              </motion.div>

              {/* Content - Right Side */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                  {mentor.name}
                </h3>
                <p className="text-xs font-semibold text-accent mb-1">{mentor.role}</p>
                <p className="text-[10px] text-muted-foreground mb-1">{mentor.experience}</p>
                <p className="text-[10px] text-primary/80 font-medium">{mentor.expertise}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Single column with compact horizontal cards */}
        <div className="md:hidden flex flex-col gap-3">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group flex items-center gap-3 bg-card border border-border rounded-lg p-3 shadow-sm"
            >
              {/* Image - Left Side */}
              <div className="w-16 h-16 rounded-lg overflow-hidden ring-2 ring-primary/20 flex-shrink-0">
                <img 
                  src={mentor.image} 
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content - Right Side */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-foreground truncate">{mentor.name}</h3>
                <p className="text-xs font-semibold text-accent">{mentor.role}</p>
                <p className="text-[10px] text-muted-foreground">{mentor.experience}</p>
                <p className="text-[10px] text-primary/80 font-medium truncate">{mentor.expertise}</p>
              </div>

              {/* LinkedIn Icon */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
              >
                <Linkedin className="w-4 h-4 text-primary" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

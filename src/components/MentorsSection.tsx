import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Linkedin, ChevronDown } from "lucide-react";

const mentors = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Full Stack Lead",
    experience: "12 Years at Google & Amazon",
    expertise: "MERN Stack, System Design",
    bio: "Passionate about building scalable applications and mentoring the next generation of developers.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "AI/ML Architect",
    experience: "10 Years at Microsoft",
    expertise: "Deep Learning, NLP, Computer Vision",
    bio: "Expert in designing intelligent systems and transforming complex data into actionable insights.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Arjun Patel",
    role: "Cloud Solutions Expert",
    experience: "15 Years at AWS & IBM",
    expertise: "AWS, DevOps, Kubernetes",
    bio: "Helping organizations transform their infrastructure with modern cloud-native architectures.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Data Science Lead",
    experience: "11 Years at Netflix",
    expertise: "Python, ML, Analytics",
    bio: "Specialized in building data-driven solutions that power business decisions at scale.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "DevOps Architect",
    experience: "13 Years at Cisco",
    expertise: "CI/CD, Docker, Jenkins",
    bio: "Automating deployment pipelines and ensuring seamless software delivery for enterprises.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
];

export const MentorsSection = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };

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

        {/* Mentor Cards - Single Column */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="overflow-hidden"
            >
              {/* Collapsed Card - Clickable */}
              <motion.div
                onClick={() => handleClick(mentor.id)}
                className={`flex items-center justify-between gap-4 bg-card border rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                  selectedId === mentor.id 
                    ? "border-primary shadow-lg rounded-b-none" 
                    : "border-border hover:border-primary/40 hover:shadow-md"
                }`}
                whileHover={{ scale: selectedId === mentor.id ? 1 : 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20 flex-shrink-0">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-foreground">{mentor.name}</h3>
                    <p className="text-xs text-accent font-medium">{mentor.role}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: selectedId === mentor.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </motion.div>

              {/* Expanded Content */}
              <AnimatePresence>
                {selectedId === mentor.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="bg-card border border-t-0 border-primary rounded-b-xl overflow-hidden"
                  >
                    <div className="flex flex-col md:flex-row gap-6 p-6">
                      {/* Image - Left Side with slide-in animation */}
                      <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex-shrink-0 flex justify-center md:justify-start"
                      >
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden ring-4 ring-accent/30 shadow-xl">
                          <img 
                            src={mentor.image} 
                            alt={mentor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </motion.div>

                      {/* Content - Right Side with slide-in animation */}
                      <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 text-center md:text-left"
                      >
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                          {mentor.name}
                        </h3>
                        <p className="text-sm font-semibold text-accent mb-2">{mentor.role}</p>
                        <p className="text-xs text-primary font-medium mb-3">{mentor.experience}</p>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {mentor.bio}
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                          {mentor.expertise.split(", ").map((skill) => (
                            <span 
                              key={skill}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                          Connect on LinkedIn
                        </a>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

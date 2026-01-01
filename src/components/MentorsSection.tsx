import { motion } from "framer-motion";
import { Linkedin, Award, Briefcase } from "lucide-react";

const mentors = [
  {
    id: 1,
    name: "Raviteja",
    specialty: "Cyber Security",
    experience: "8+ Years",
    company: "Ex-Microsoft",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Divya Rani",
    specialty: "QA Automation",
    experience: "6+ Years",
    company: "Ex-Amazon",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Chaitanya",
    specialty: "ServiceNow",
    experience: "10+ Years",
    company: "Ex-Google",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Lakshmi Priya",
    specialty: "Cloud Computing",
    experience: "7+ Years",
    company: "Ex-IBM",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Kiran Kumar",
    specialty: "Data Analytics",
    experience: "9+ Years",
    company: "Ex-Netflix",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
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
          className="text-center mb-12"
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

        {/* Mentor Cards - Horizontal Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Card Container with hover effect */}
              <div className="relative overflow-hidden rounded-2xl bg-card shadow-md mb-4 aspect-[3/4]">
                {/* Image - slides left on hover */}
                <motion.img 
                  src={mentor.image} 
                  alt={mentor.name}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out group-hover:w-[60%] group-hover:rounded-r-xl"
                />
                
                {/* Info Panel - reveals from right on hover */}
                <div className="absolute right-0 top-0 bottom-0 w-[45%] bg-card flex flex-col justify-center px-3 py-4 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs text-foreground font-medium">{mentor.experience}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-accent" />
                      <span className="text-xs text-muted-foreground">{mentor.company}</span>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors mt-2"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>Connect</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Name & Specialty */}
              <div className="text-left">
                <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {mentor.name}
                </h3>
                <p className="text-sm text-primary font-medium">
                  {mentor.specialty}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

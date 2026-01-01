import { motion } from "framer-motion";
import { Award, Users, Briefcase, TrendingUp, Shield, Zap, Target, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Industry Expert Trainers",
    description: "Learn from professionals with 10+ years of real-world experience",
  },
  {
    icon: Users,
    title: "Small Batch Sizes",
    description: "Personal attention with maximum 20 students per batch",
  },
  {
    icon: Briefcase,
    title: "100% Placement Support",
    description: "Dedicated career guidance until you land your dream job",
  },
  {
    icon: TrendingUp,
    title: "Live Project Training",
    description: "Build real applications used by actual companies",
  },
  {
    icon: Shield,
    title: "Lifetime Access",
    description: "Course materials and community access forever",
  },
  {
    icon: Zap,
    title: "Flexible Learning",
    description: "Weekend and weekday batches with online options",
  },
  {
    icon: Target,
    title: "Updated Curriculum",
    description: "Content refreshed quarterly to match industry standards",
  },
  {
    icon: HeartHandshake,
    title: "Post-Training Support",
    description: "Technical doubts cleared even after course completion",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.15,
    rotate: 360,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const cardVariants = {
  initial: {
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
  },
  hover: {
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "0 20px 25px rgba(0, 0, 0, 0.1)",
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <span className="text-foreground">Why </span>
              <motion.span
                className="text-primary inline-block"
                whileInView={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Choose
              </motion.span>
              <span className="text-foreground"> Us</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Your success is our mission. Here's what makes us different
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover="hover"
                initial="initial"
                className="group"
              >
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  className="bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-300 cursor-pointer"
                >
                  <motion.div
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300"
                  >
                    <IconComponent className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </motion.div>

                  <motion.h3
                    className="text-lg font-bold text-foreground mb-2"
                    whileHover={{ color: "hsl(214, 85%, 30%)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-muted-foreground leading-relaxed"
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center mt-16"
        >
          <motion.p
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-sm text-muted-foreground mb-6"
          >
            Join <motion.span
              className="font-bold text-accent inline-block"
              whileInView={{ scale: 1.2 }}
              transition={{ duration: 0.4, delay: 1.2 }}
            >
              2000+
            </motion.span> students who transformed their careers with us
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

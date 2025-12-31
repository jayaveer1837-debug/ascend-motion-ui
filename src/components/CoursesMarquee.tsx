import { motion } from "framer-motion";

const courses = [
  { name: "Full Stack Development", icon: "🖥️" },
  { name: "Python Programming", icon: "🐍" },
  { name: "Data Science", icon: "📊" },
  { name: "Java Development", icon: "☕" },
  { name: "Cloud Computing", icon: "☁️" },
  { name: "DevOps", icon: "🔧" },
  { name: "Machine Learning", icon: "🤖" },
  { name: "Cyber Security", icon: "🔒" },
  { name: "UI/UX Design", icon: "🎨" },
  { name: "Digital Marketing", icon: "📱" },
];

export const CoursesMarquee = () => {
  return (
    <section className="py-8 bg-muted/30 overflow-hidden border-y border-border/50">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Our Courses
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 to-transparent z-10" />
        
        {/* Marquee container */}
        <div className="flex">
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Double the items for seamless loop */}
            {[...courses, ...courses, ...courses].map((course, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-background rounded-full border border-border/50 shadow-sm whitespace-nowrap hover:border-primary/50 hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {course.icon}
                </span>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {course.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, School, BookOpen } from "lucide-react";

const timelineData = [
  {
    title: "Narayana Olympiad School",
    subtitle: "6th to 10th Grade",
    date: "June 2016 – Feb 2020",
    description: "Built strong academic foundations and analytical skills during the foundational schooling years.",
    icon: <School size={20} className="text-blue-400" />,
    color: "from-blue-500",
  },
  {
    title: "Narayana Junior College",
    subtitle: "Intermediate (MPC)",
    date: "Apr 2020 – Mar 2022",
    description: "Specialized in Mathematics, Physics, and Chemistry, laying the groundwork for engineering.",
    icon: <BookOpen size={20} className="text-purple-400" />,
    color: "from-purple-500",
  },
  {
    title: "MVGR College of Engineering",
    subtitle: "B.Tech in CSE - Cyber Security",
    date: "Sep 2023 – Present",
    description: "Deep-diving into computer science principles, with a specialized focus on network security, cryptography, and secure application development.",
    icon: <GraduationCap size={20} className="text-pink-400" />,
    color: "from-pink-500",
  },
  {
    title: "Freelance Journey – NetMaxin Group",
    subtitle: "Software Engineering Freelancer",
    date: "Oct 2024 – Oct 2025",
    description: "Focused on UI enhancements, bug fixing, AI tools testing, and comprehensive integration testing to ensure robust and seamless application experiences.",
    icon: <Briefcase size={20} className="text-emerald-400" />,
    color: "from-emerald-500",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated Main Vertical Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-primary md:-translate-x-1/2 rounded-full opacity-30"
          ></motion.div>

          <div className="space-y-12 md:space-y-24">
            {timelineData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Glowing Node Marker */}
                <div className="absolute left-[16px] md:left-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 z-10 flex h-6 w-6 md:h-12 md:w-12 items-center justify-center">
                  <div className={`absolute h-4 w-4 md:h-full md:w-full rounded-full bg-gradient-to-br ${item.color} to-transparent opacity-20 blur-sm md:blur-md animate-pulse`}></div>
                  <div className="hidden md:flex h-12 w-12 rounded-full glass border border-border items-center justify-center bg-background shadow-[0_0_15px_rgba(0,0,0,0.2)] z-20">
                    {item.icon}
                  </div>
                  <div className="md:hidden h-4 w-4 rounded-full bg-primary ring-4 ring-background z-20"></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${i % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}>
                  <div className="glass p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 relative group overflow-hidden bg-black/5 dark:bg-black/20 hover:shadow-[0_0_30px_rgba(var(--primary),0.1)] hover:-translate-y-1">
                    {/* Hover Gradient Sweep */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-xs font-bold tracking-wider text-muted-foreground bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full whitespace-nowrap border border-border inline-block w-fit">
                        {item.date}
                      </span>
                    </div>
                    
                    <h4 className="text-primary font-medium mb-3 flex items-center gap-2">
                      <span className="md:hidden">{item.icon}</span>
                      {item.subtitle}
                    </h4>
                    
                    {item.title.includes("Freelance") ? (
                      <ul className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-2 list-disc list-inside marker:text-primary/50">
                        <li>UI & Bug Fixing</li>
                        <li>AI Tools Testing</li>
                        <li>Integration Testing</li>
                      </ul>
                    ) : (
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

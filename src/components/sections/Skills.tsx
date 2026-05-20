"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
  },
  {
    title: "Backend & APIs",
    skills: ["Python", "Node.js", "Express", "REST APIs", "OpenAPI", "MongoDB"],
  },
  {
    title: "AI & Security",
    skills: ["NLP", "Hybrid Recommendation Systems", "API Security Testing", "Cyber Security Fundamentals", "Machine Learning"],
  },
  {
    title: "Tools & Workflows",
    skills: ["Git", "GitHub", "Vercel", "CI/CD Workflows", "Jest", "Postman", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-primary/10 -skew-y-12 -z-10 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="glass bg-black/5 dark:bg-white/5 border-border hover:border-primary/50 transition-colors h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, j) => (
                      <Badge 
                        key={j} 
                        variant="glass" 
                        className="px-4 py-2 text-sm text-foreground hover:bg-black/10 dark:hover:bg-white/10 transition-colors border-border"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

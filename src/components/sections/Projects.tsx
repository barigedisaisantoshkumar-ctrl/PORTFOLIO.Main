"use client";

import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const projects = [
  {
    title: "RecomInd AI",
    description: "An advanced AI recommendation engine integrated with an NLP chatbot. It uses hybrid collaborative filtering to provide highly personalized suggestions to users based on their historical data and preferences.",
    image: "/recomind.png",
    tags: ["React", "Python", "NLP", "Machine Learning", "Tailwind CSS"],
  },
  {
    title: "Chaos API Fuzzer",
    description: "An autonomous API security testing tool that parses OpenAPI specifications to generate intelligent fuzzing tests. It seamlessly integrates into CI/CD pipelines to ensure API robustness and security.",
    image: "/chaos-fuzzer.png",
    tags: ["Python", "API Security", "OpenAPI", "CI/CD", "Testing"],
  },
  {
    title: "SathyaBhoomi",
    description: "A smart land measurement application that integrates with GPS mapping. Designed to provide accurate, real-time land plotting and area calculation with an intuitive user interface.",
    image: "/sathyabhoomi.png",
    tags: ["React Native", "GPS Integration", "Mapping", "Node.js"],
  },
  {
    title: "MoodWear AI",
    description: "An AI-powered outfit recommendation app that utilizes color theory algorithms and user mood analysis to suggest the perfect daily attire through a highly responsive React UI.",
    image: "/moodwear.png", 
    tags: ["React", "AI", "Color Theory", "Framer Motion"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="glass border-border overflow-hidden group h-full flex flex-col hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary),0.15)] transition-all duration-500 bg-black/5 dark:bg-black/20">
                <div className="relative w-full aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <CardContent className="flex flex-col flex-grow p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, j) => (
                      <Badge key={j} variant="secondary" className="bg-black/5 dark:bg-white/5 text-muted-foreground border border-border group-hover:border-primary/30 transition-colors">
                        {tag}
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

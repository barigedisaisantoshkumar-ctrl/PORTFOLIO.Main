"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Brain, Layout, TestTube, Code, Cpu } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const highlights = [
  { icon: <Shield className="text-blue-400" />, title: "Cyber Security", desc: "Specializing in secure systems and API testing" },
  { icon: <Brain className="text-purple-400" />, title: "AI/ML", desc: "Building intelligent recommendation systems" },
  { icon: <Layout className="text-pink-400" />, title: "Frontend Dev", desc: "Creating modern, responsive user interfaces" },
  { icon: <TestTube className="text-emerald-400" />, title: "Software Testing", desc: "Ensuring code quality and reliability" },
  { icon: <Code className="text-amber-400" />, title: "Scalable Apps", desc: "Architecting for performance and growth" },
  { icon: <Cpu className="text-cyan-400" />, title: "Problem Solving", desc: "Analytical mindset for complex challenges" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Engineering the Future
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a dedicated Computer Science Engineering student with a strong specialization in Cyber Security. My journey in tech is driven by a passion for creating not just functional, but exceptional digital experiences.
              </p>
              <p>
                With hands-on experience in full-stack web development, integrating AI-powered features, and rigorous software testing, I build solutions that are scalable, secure, and user-centric.
              </p>
              <p>
                Whether it's developing an autonomous API security testing tool or crafting a visually stunning frontend, I approach every project with a problem-solving mindset and a commitment to excellence.
              </p>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "B.Tech in Computer Science",
                "Cyber Security Specialist",
                "Full-Stack Developer",
                "AI Enthusiast"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <Card className="glass border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 bg-black/5 dark:bg-black/20">
                  <CardContent className="p-6 flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center bg-black/5 dark:bg-white/5">
                      {item.icon}
                    </div>
                    <h4 className="text-foreground font-medium">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

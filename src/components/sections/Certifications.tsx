"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Award, ShieldCheck, Trophy } from "lucide-react";
import Image from "next/image";

const majorAchievements = [
  {
    title: "CCNA Certified",
    issuer: "Cisco",
    description: "Networking fundamentals covering TCP/IP, routing, switching, and network troubleshooting.",
    icon: <ShieldCheck className="text-blue-400" size={24} />,
    color: "border-blue-500/30",
  },
  {
    title: "ServiceNow Certified (CSA & CSD)",
    issuer: "ServiceNow",
    description: "Certified System Administrator & Certified Application Developer across enterprise ITSM workflows.",
    icon: <Award className="text-emerald-400" size={24} />,
    color: "border-emerald-500/30",
  },
  {
    title: "First Prize – Cybersecurity Workshop",
    issuer: "Technical Challenge (2025)",
    description: "Won 1st place for network diagnostics, security analysis, and rapid problem-solving.",
    icon: <Trophy className="text-amber-400" size={24} />,
    color: "border-amber-500/30",
  },
];

const certs = [
  { name: "ServiceNow Micro-Certification", image: "/Micro-Certification - Welcome to ServiceNow.png" },
  { name: "AWS Cloud Foundation", image: "/AWS Cloud Foundation.png" },
  { name: "AWS Machine learning", image: "/AWS Machine learning.png" },
  { name: "Acquring Data", image: "/Acquring Data.png" },
  { name: "CISCO Introduction to cyber security", image: "/CISCO Introduction to cyber security.png" },
  { name: "CyberThreya", image: "/CyberThreya.png" },
  { name: "Certification 7", image: "/certificate-7.png" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Industry-recognized credentials, enterprise platform certifications, and technical competition awards.
          </p>
        </motion.div>

        {/* Featured Key Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {majorAchievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className={`glass bg-black/5 dark:bg-black/20 border ${item.color} h-full hover:-translate-y-1 transition-all duration-300`}>
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl glass bg-black/5 dark:bg-white/5">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-base md:text-lg text-foreground">{item.title}</h3>
                        <span className="text-xs text-primary font-medium">{item.issuer}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="glass border-border bg-black/5 dark:bg-black/20 overflow-hidden group cursor-pointer h-full hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(var(--secondary),0.15)] transition-all duration-300">
                <div className="relative aspect-[4/3] w-full overflow-hidden p-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white font-medium text-sm text-center px-2">{cert.name}</span>
                  </div>
                  <div className="relative w-full h-full rounded-lg overflow-hidden bg-black/5 dark:bg-white/5">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      fill
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


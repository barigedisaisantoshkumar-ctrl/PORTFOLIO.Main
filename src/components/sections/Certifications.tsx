"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

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
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
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

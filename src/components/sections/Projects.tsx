"use client";

import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { CheckCircle2, Layers, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CertiFlow",
    subtitle: "Certificate Generation & Verification Platform",
    description:
      "Automated internship certificate issuance with instant QR-code-based authenticity verification, removing manual paperwork and streamlining credential lifecycle management for organizations.",
    highlights: [
      "Automated internship certificate issuance with instant QR-code-based authenticity verification.",
      "Designed the database schema and duplicate/status validation checks used to verify each certificate record.",
      "Engineered comprehensive dashboard for intern tracking, certificate issuance, active status, and audit logs.",
    ],
    image: "/certiflow.png",
    tags: ["React", "Supabase", "PostgreSQL", "Auth", "Storage", "Edge Functions", "QR Verification"],
  },
  {
    title: "Autonomous API Attacker Agent (A³-Agent)",
    subtitle: "API Business Logic Security Testing",
    description:
      "An autonomous security agent that parses OpenAPI (v2/v3) specifications into an API graph of endpoints, schemas, and dependencies to generate adversarial requests and unearth complex business logic flaws.",
    highlights: [
      "Parses OpenAPI (v2/v3) specifications into an API graph of endpoints, schemas, and dependencies.",
      "Detects authorization bypass, invalid state transitions, and logical inconsistencies using edge-case payloads (boundary values, type confusion, mass assignment).",
      "Generates actionable vulnerability reports with severity, confidence score, request/response samples, remediation guidance, safe-mode, and rate-limiting controls.",
    ],
    image: "/chaos-fuzzer.png",
    tags: ["Python", "OpenAPI/Swagger", "REST APIs", "API Security Testing", "CI/CD Workflows"],
  },
  {
    title: "SathyaBhoomi",
    subtitle: "Smart Land Measurement Tool",
    description:
      "A mobile-friendly geolocation and land calculation tool enabling farmers and landowners to measure land area accurately without costly survey equipment.",
    highlights: [
      "Built a mobile-friendly tool enabling farmers to measure land area accurately without survey equipment.",
      "Tested map-based inputs for accuracy, coordinate precision, and reliability under real-world field conditions.",
      "Provides real-time interactive mapping, GPS polygon plotting, and automated land area calculations.",
    ],
    image: "/sathyabhoomi.png",
    tags: ["React", "GPS API", "Interactive Mapping", "Geolocation", "Tailwind CSS"],
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold text-primary mb-3">
            <Layers size={14} />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Real-world systems, automated security tooling, and full-stack platforms engineered with reliability and precision.
          </p>
        </motion.div>

        {/* Stack format 1 by 1 */}
        <div className="flex flex-col gap-12 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Card className="glass border-border overflow-hidden group bg-black/5 dark:bg-black/20 hover:border-primary/50 hover:shadow-[0_0_35px_rgba(var(--primary),0.12)] transition-all duration-500 rounded-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Project Image Preview (Left/Right alternating visually or top-left) */}
                  <div className={`lg:col-span-6 relative min-h-[260px] md:min-h-[340px] lg:min-h-[420px] overflow-hidden bg-black/20 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="text-xs font-bold tracking-wider px-3 py-1 rounded-full glass bg-black/60 text-white backdrop-blur-md border border-white/10">
                        Project #{i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Project Info & Resume Highlights */}
                  <CardContent className={`lg:col-span-6 flex flex-col justify-between p-6 md:p-8 lg:p-10 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div>
                      <div className="mb-2">
                        <span className="text-xs uppercase font-bold tracking-widest text-primary">
                          {project.subtitle}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground text-sm md:text-base mb-5 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Highlights from Resume */}
                      <div className="space-y-2.5 mb-6">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                            <p className="text-xs md:text-sm text-muted-foreground/90 leading-normal">
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="pt-4 border-t border-border/50">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, j) => (
                          <Badge
                            key={j}
                            variant="secondary"
                            className="bg-black/5 dark:bg-white/5 text-muted-foreground border border-border group-hover:border-primary/30 transition-colors text-xs py-1 px-2.5"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


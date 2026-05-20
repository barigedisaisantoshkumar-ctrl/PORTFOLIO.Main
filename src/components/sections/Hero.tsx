"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const profileImages = [
  "/profile-1.jpg",
  "/profile-2.jpg",
  "/profile-3.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % profileImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + profileImages.length) % profileImages.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] -z-10 animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-sm text-primary dark:text-blue-200 font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
            >
              Hi, I'm <br className="hidden lg:block" />
              <span className="text-gradient">Sai Santosh Kumar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Computer Science Engineering student passionate about building scalable web applications, AI-powered systems, and modern digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-4"
            >
              <Button asChild variant="gradient" size="lg" className="rounded-full gap-2">
                <Link href="#projects">
                  View Projects <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="glass" size="lg" className="rounded-full gap-2 border-border text-foreground hover:bg-black/5 dark:hover:bg-white/5">
                <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume <Download size={18} />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full h-12 w-12 glass border-border hover:bg-black/5 dark:hover:bg-white/5">
                <Link href="#contact">
                  <Mail size={20} className="text-primary" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-primary blur-2xl opacity-40 animate-pulse"></div>
              
              <div className="absolute inset-2 rounded-full glass border border-border overflow-hidden flex items-center justify-center bg-black/5 dark:bg-black/40 z-10 group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={profileImages[currentImage]}
                      alt="Profile Image"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Controls - visible on hover */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-20 backdrop-blur-sm"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-20 backdrop-blur-sm"
                >
                  <ChevronRight size={24} />
                </button>
                
                {/* Dots indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {profileImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${currentImage === idx ? "bg-white w-4" : "bg-white/50"}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 right-10 glass p-3 rounded-2xl z-20 shadow-xl border border-border"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  JS
                </div>
              </motion.div>
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-10 glass p-3 rounded-2xl z-20 shadow-xl border border-border"
              >
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                  AI
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

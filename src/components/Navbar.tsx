"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skill", href: "#skills" },
  { name: "Project", href: "#projects" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-6 py-4 transition-all duration-300",
            isScrolled ? "glass shadow-lg" : "bg-transparent"
          )}
        >
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden group-hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] transition-all">
              <Image src="/10.png" alt="Logo" fill className="object-cover" unoptimized />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Santosh<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all group-hover:w-full rounded-full"></span>
                  </Link>
                </li>
              ))}
              <li>
                <Button asChild variant="gradient" className="rounded-full">
                  <Link href="#contact">Get in Contact</Link>
                </Button>
              </li>
            </ul>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              className="text-muted-foreground hover:text-foreground transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 glass rounded-2xl p-4 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground font-medium p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild variant="gradient" className="w-full">
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get in Contact
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </header>
  );
}

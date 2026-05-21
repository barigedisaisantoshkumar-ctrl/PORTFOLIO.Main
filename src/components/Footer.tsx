import { Mail } from "lucide-react";
import { Github, Linkedin } from "./icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-black/5 dark:bg-black/20 backdrop-blur-md py-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-foreground">
                Santosh<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Building scalable web applications, AI-powered systems, and modern digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-foreground font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition text-sm">About</Link>
              <Link href="#skills" className="text-muted-foreground hover:text-foreground transition text-sm">Skills</Link>
              <Link href="#projects" className="text-muted-foreground hover:text-foreground transition text-sm">Projects</Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition text-sm">Contact</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-foreground font-semibold">Connect</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                <Github />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                <Linkedin />
              </a>
              <a
                href="mailto:contact@example.com"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sai Santosh Kumar. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built with Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

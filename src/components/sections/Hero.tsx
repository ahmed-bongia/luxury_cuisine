"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, scale, willChange: "transform" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=85&w=1600"
          alt="Luxury Cuisine"
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ opacity }}
        >
          <span className="text-primary uppercase tracking-[0.5em] text-xs md:text-sm font-bold mb-4 block">
            The Art of Excellence
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-light leading-tight mb-8">
            Experience the <br />
            <span className="italic text-primary">Brilliance</span> of Taste
          </h1>
          <p className="max-w-xl mx-auto text-foreground/60 text-lg md:text-xl font-light mb-10 leading-relaxed">
            Where every ingredient tells a story, and every dish is a masterpiece of cinematic proportion.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
              Explore Menu
            </button>
            <button className="px-10 py-4 border border-white/20 hover:border-primary rounded-full font-bold uppercase tracking-widest text-xs transition-colors">
              Our Story
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}

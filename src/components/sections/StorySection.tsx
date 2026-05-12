"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface StorySectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  reversed?: boolean;
}

export function StorySection({ title, subtitle, description, image, reversed }: StorySectionProps) {
  return (
    <section className="py-24 md:py-40 px-6 overflow-hidden">
      <div className={cn(
        "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
        reversed ? "lg:flex-row-reverse" : ""
      )}>
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: reversed ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
          className={cn("space-y-8", reversed ? "lg:order-2" : "")}
        >
          <div className="space-y-4">
            <span className="text-primary font-serif italic text-xl">{subtitle}</span>
            <h2 className="text-4xl md:text-6xl font-serif font-light leading-tight">
              {title}
            </h2>
          </div>
          <p className="text-foreground/60 text-lg leading-relaxed font-light max-w-lg">
            {description}
          </p>
          <div className="pt-4">
            <button className="group flex items-center gap-4 text-primary uppercase tracking-widest text-xs font-bold">
              Learn More 
              <span className="w-8 h-[1px] bg-primary group-hover:w-12 transition-all" />
            </button>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: reversed ? -50 : 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
          className={cn("relative aspect-[4/5] md:aspect-square group", reversed ? "lg:order-1" : "")}
        >
          <div className="absolute inset-4 border border-primary/20 z-10 pointer-events-none group-hover:inset-0 transition-all duration-700" />
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const dishes = [
  {
    title: "Le Cœur de Bœuf",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    price: "$85",
  },
  {
    title: "Symphonie de Mer",
    category: "Appetizer",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
    price: "$42",
  },
  {
    title: "L'Or Noir",
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800",
    price: "$38",
  },
];

export function SignatureDishes() {
  return (
    <section className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary uppercase tracking-[0.3em] text-xs font-bold"
          >
            Signature Creations
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif mt-4"
          >
            The Culinary <span className="italic">Collection</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {dishes.map((dish, index) => (
            <DishCard key={dish.title} dish={dish} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DishCard({ dish, index }: { dish: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? -100 : 100]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y: index % 2 === 0 ? y : 0, willChange: "transform" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
        <Image
          src={dish.image}
          alt={dish.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-1000"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
        <div className="absolute bottom-6 left-6 right-6">
          <span className="text-primary text-[10px] uppercase tracking-widest font-bold block mb-2">
            {dish.category}
          </span>
          <h3 className="text-2xl font-serif text-white">{dish.title}</h3>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center border-b border-white/10 pb-4 group-hover:border-primary transition-colors">
        <span className="text-foreground/40 text-xs uppercase tracking-widest">Details</span>
        <span className="text-primary font-serif italic text-lg">{dish.price}</span>
      </div>
    </motion.div>
  );
}

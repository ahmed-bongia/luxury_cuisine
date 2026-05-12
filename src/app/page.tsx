"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StorySection } from "@/components/sections/StorySection";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        
        <div id="experience">
          <StorySection
            subtitle="Our Heritage"
            title="The Art of Precision"
            description="Founded on the belief that dining is the highest form of performance art, L'Éclat brings together master craftsmanship and the world's rarest ingredients to create an unforgettable sensory journey."
            image="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&q=80&w=800"
          />
        </div>

        <div id="menu">
          <SignatureDishes />
        </div>

        <div id="philosophy">
          <StorySection
            reversed
            subtitle="The Philosophy"
            title="Elemental Brilliance"
            description="We strip away the unnecessary, focusing on the raw essence of nature's bounty. Our kitchen is a laboratory of flavor, where fire, earth, and water meet to challenge the boundaries of taste."
            image="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
          />
        </div>

        {/* Cinematic CTA Section */}
        <section id="reserve" className="relative py-40 overflow-hidden bg-black">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          </div>
          
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-7xl font-serif mb-8">Begin Your Journey</h2>
              <p className="text-foreground/60 text-lg mb-12 font-light tracking-wide">
                Reservations are released on the first of every month. Join our waitlist for priority access to private dining events.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent border-b border-white/20 px-4 py-4 w-full md:w-80 focus:border-primary outline-none text-sm transition-colors"
                />
                <button className="px-12 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white transition-colors w-full md:w-auto">
                  Join the List
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}

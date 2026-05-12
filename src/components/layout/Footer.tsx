"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        {/* Brand */}
        <div className="space-y-8 col-span-1 md:col-span-1">
          <h2 className="text-3xl font-serif font-bold tracking-widest text-primary">L'ÉCLAT</h2>
          <p className="text-foreground/40 text-sm leading-relaxed max-w-xs font-light">
            Crafting moments of culinary brilliance since 1994. A sanctuary for those who seek the extraordinary in every bite.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-foreground/40 hover:text-primary transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="text-foreground/40 hover:text-primary transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="text-foreground/40 hover:text-primary transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-8">
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-white">Navigate</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-foreground/40 hover:text-primary text-sm transition-colors uppercase tracking-widest font-medium">Experience</a></li>
            <li><a href="#" className="text-foreground/40 hover:text-primary text-sm transition-colors uppercase tracking-widest font-medium">The Menu</a></li>
            <li><a href="#" className="text-foreground/40 hover:text-primary text-sm transition-colors uppercase tracking-widest font-medium">Philosophy</a></li>
            <li><a href="#" className="text-foreground/40 hover:text-primary text-sm transition-colors uppercase tracking-widest font-medium">Private Dining</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-8">
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-white">Contact</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 text-foreground/40 group">
              <MapPin size={18} className="text-primary mt-1" />
              <span className="text-sm font-light group-hover:text-foreground transition-colors">124 Avenue des Champs-Élysées, Paris, France</span>
            </li>
            <li className="flex items-center gap-4 text-foreground/40 group">
              <Phone size={18} className="text-primary" />
              <span className="text-sm font-light group-hover:text-foreground transition-colors">+33 (0) 1 23 45 67 89</span>
            </li>
            <li className="flex items-center gap-4 text-foreground/40 group">
              <Mail size={18} className="text-primary" />
              <span className="text-sm font-light group-hover:text-foreground transition-colors">concierge@leclat.com</span>
            </li>
          </ul>
        </div>

        {/* Reservations */}
        <div className="space-y-8">
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-white">Availability</h4>
          <p className="text-foreground/40 text-sm font-light leading-relaxed">
            Tuesday — Saturday<br />
            19:00 — 23:30
          </p>
          <button className="w-full py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 rounded-sm text-xs uppercase tracking-widest font-bold">
            Request Table
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-foreground/20">
        <span>© 2024 L'Éclat Culinaire. All Rights Reserved.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import { Phone, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-foreground text-cream">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Couple Names */}
          <h3 className="font-serif text-3xl md:text-4xl mb-6">
            Arun <span className="text-gold">&</span> Athira
          </h3>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-cream/30" />
            <Heart className="w-4 h-4 text-gold fill-gold" />
            <div className="h-px w-16 bg-cream/30" />
          </div>

          {/* Contact */}
          <div className="mb-8">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-cream/60 mb-3">
              For Enquiries
            </p>
            <a
              href="tel:+919447209196"
              className="inline-flex items-center gap-2 font-sans text-lg md:text-xl text-cream hover:text-gold transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91 9447209196
            </a>
          </div>

          {/* Date */}
          <p className="font-serif text-lg italic text-cream/80 mb-8">
            August 2nd, 2026
          </p>

          {/* Decorative Bottom */}
          <div className="pt-8 border-t border-cream/10">
            <p className="font-sans text-xs text-cream/40 tracking-wide">
              We can&apos;t wait to celebrate with you
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

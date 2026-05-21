"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[url('/floral-bg.jpg')] bg-cover bg-center bg-fixed">
      {/* Overlay */}
      <div className="absolute inset-0 bg-cream/85" />
      
      {/* Animated floating decorative circles */}
      <motion.div 
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 left-8 md:left-16 w-20 h-20 md:w-32 md:h-32 border border-gold/30 rounded-full" 
      />
      <motion.div 
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-8 md:right-16 w-16 h-16 md:w-24 md:h-24 border border-gold/20 rounded-full" 
      />
      <motion.div 
        animate={{ y: [-5, 15, -5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-12 md:right-24 w-10 h-10 md:w-16 md:h-16 border border-gold/25 rounded-full" 
      />
      <motion.div 
        animate={{ y: [5, -15, 5], x: [-5, 5, -5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-12 md:left-24 w-12 h-12 md:w-20 md:h-20 border border-gold/20 rounded-full" 
      />

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" className="text-gold/40 md:w-20 md:h-20">
            <path d="M0 60 L0 20 Q0 0 20 0 L60 0" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="5" cy="55" r="3" fill="currentColor" />
          </svg>
        </motion.div>
      </div>
      <div className="absolute top-6 right-6 md:top-10 md:right-10">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" className="text-gold/40 md:w-20 md:h-20">
            <path d="M60 60 L60 20 Q60 0 40 0 L0 0" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="55" cy="55" r="3" fill="currentColor" />
          </svg>
        </motion.div>
      </div>
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" className="text-gold/40 md:w-20 md:h-20">
            <path d="M0 0 L0 40 Q0 60 20 60 L60 60" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="5" cy="5" r="3" fill="currentColor" />
          </svg>
        </motion.div>
      </div>
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" className="text-gold/40 md:w-20 md:h-20">
            <path d="M60 0 L60 40 Q60 60 40 60 L0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="55" cy="5" r="3" fill="currentColor" />
          </svg>
        </motion.div>
      </div>

      {/* Sparkle effects */}
      <motion.div
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-2 h-2 bg-gold/60 rounded-full blur-[1px]"
      />
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-gold/50 rounded-full blur-[1px]"
      />
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-gold/40 rounded-full blur-[1px]"
      />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Top decorative element */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-6"
        >
          <svg width="120" height="30" viewBox="0 0 120 30" className="text-gold/60">
            <path d="M0 15 Q30 0 60 15 Q90 30 120 15" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="60" cy="15" r="4" fill="currentColor" />
            <circle cx="30" cy="8" r="2" fill="currentColor" opacity="0.5" />
            <circle cx="90" cy="8" r="2" fill="currentColor" opacity="0.5" />
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-sans text-sm md:text-base tracking-[0.3em] text-gold-dark uppercase mb-6"
        >
          We&apos;re Getting Married
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative line behind names */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
          />
          
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium text-foreground mb-2"
          >
            Arun
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative my-4"
          >
            <p className="font-serif text-3xl md:text-4xl italic text-gold-dark">&</p>
            {/* Small hearts around the ampersand */}
            <motion.span
              animate={{ y: [-2, 2, -2], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -left-6 top-1/2 -translate-y-1/2 text-gold/40 text-sm"
            >
              ♥
            </motion.span>
            <motion.span
              animate={{ y: [2, -2, 2], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute -right-6 top-1/2 -translate-y-1/2 text-gold/40 text-sm"
            >
              ♥
            </motion.span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium text-foreground"
          >
            Athira
          </motion.h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-gold/50 origin-right" 
            />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="font-sans text-xs tracking-[0.2em] text-muted-foreground px-2 border border-gold/20 py-1 rounded-sm"
            >
              SAVE THE DATE
            </motion.span>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-gold/50 origin-left" 
            />
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="font-serif text-2xl md:text-3xl text-foreground"
          >
            August 2nd, 2026
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="font-sans text-sm md:text-base text-muted-foreground mt-2 tracking-wide"
          >
            Sunday • 5:00 PM
          </motion.p>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex justify-center mt-10"
        >
          <svg width="80" height="20" viewBox="0 0 80 20" className="text-gold/50">
            <path d="M0 10 L25 10 M55 10 L80 10" stroke="currentColor" strokeWidth="1" />
            <path d="M30 5 Q40 15 50 5" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="40" cy="10" r="2" fill="currentColor" />
          </svg>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-sans text-xs tracking-widest text-muted-foreground">SCROLL</span>
          <div className="w-5 h-8 rounded-full border border-gold/40 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-gold/60 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

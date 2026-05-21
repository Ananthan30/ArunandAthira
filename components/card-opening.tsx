"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CardOpeningProps {
  children: React.ReactNode;
}

export function CardOpening({ children }: CardOpeningProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Start the card opening animation, then flash, then show content
    setTimeout(() => {
      setShowFlash(true);
      setTimeout(() => {
        setIsOpened(true);
        setTimeout(() => {
          setShowFlash(false);
        }, 300);
      }, 400);
    }, 800); // Wait for card flaps to open
  };

  return (
    <>
      <AnimatePresence>
        {!isOpened && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-amber-50 to-orange-50 overflow-hidden"
            style={{ perspective: "1500px" }}
            onClick={handleOpen}
          >
            {/* Card container */}
            <div 
              className="relative w-[85vw] max-w-[400px] aspect-[3/4] cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Inner content (revealed when card opens) - behind the flaps */}
              <div className="absolute inset-0 bg-cream rounded-lg shadow-inner flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[url('/floral-bg.jpg')] bg-cover bg-center" />
                </div>
              </div>

              {/* Left flap of the card */}
              <motion.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: isAnimating ? -160 : 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-y-0 left-0 w-1/2 origin-left"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front of left flap */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-amber-100 via-amber-50 to-orange-50 rounded-l-lg border border-gold/20 shadow-lg"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {/* Decorative pattern on left flap */}
                  <div className="absolute inset-0 flex items-center justify-end pr-4">
                    <div className="w-full h-full border-r border-gold/10" />
                  </div>
                  <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/30" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold/30" />
                  
                  {/* Vertical decorative line */}
                  <div className="absolute right-3 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
                </div>

                {/* Back of left flap */}
                <div 
                  className="absolute inset-0 bg-gradient-to-l from-amber-100 to-cream rounded-l-lg"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="absolute inset-4 border border-gold/10 rounded" />
                </div>
              </motion.div>

              {/* Right flap of the card */}
              <motion.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: isAnimating ? 160 : 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-y-0 right-0 w-1/2 origin-right"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front of right flap */}
                <div 
                  className="absolute inset-0 bg-gradient-to-l from-amber-100 via-amber-50 to-orange-50 rounded-r-lg border border-gold/20 shadow-lg"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {/* Decorative pattern on right flap */}
                  <div className="absolute inset-0 flex items-center justify-start pl-4">
                    <div className="w-full h-full border-l border-gold/10" />
                  </div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold/30" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/30" />
                  
                  {/* Vertical decorative line */}
                  <div className="absolute left-3 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
                </div>

                {/* Back of right flap */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-amber-100 to-cream rounded-r-lg"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="absolute inset-4 border border-gold/10 rounded" />
                </div>
              </motion.div>

              {/* Center content (on top of closed card) */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isAnimating ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10"
              >
                {/* Card seal/emblem */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative mb-6"
                >
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-cream/50 flex items-center justify-center">
                      <div className="flex items-center justify-center gap-1">
                        <span className="font-serif text-xl md:text-2xl text-cream font-medium">A</span>
                        <span className="font-serif text-lg md:text-xl text-cream/80 font-light">&</span>
                        <span className="font-serif text-xl md:text-2xl text-cream font-medium">A</span>
                      </div>
                    </div>
                  </div>
                  {/* Decorative ring around seal */}
                  <div className="absolute -inset-2 rounded-full border border-gold/30 animate-pulse" />
                </motion.div>

                {/* Tap to open */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-center mt-12"
                >
                  <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center mb-2">
                    <svg
                      className="w-4 h-4 text-gold-dark"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                      />
                    </svg>
                  </div>
                  <span className="font-sans text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
                    Tap to Open
                  </span>
                </motion.div>
              </motion.div>

              {/* Card shadow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-black/10 blur-xl rounded-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* White flash effect */}
      <AnimatePresence>
        {showFlash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-white"
          />
        )}
      </AnimatePresence>

      {/* Main content with pop-up animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: isOpened ? 1 : 0, scale: isOpened ? 1 : 0.8, y: isOpened ? 0 : 50 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}

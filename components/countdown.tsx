"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const weddingDate = new Date("2026-08-02T17:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.3em] text-gold-dark uppercase mb-4">
            Counting Down To
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Our Special Day
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-secondary/50 border border-border rounded-lg p-6 md:p-8 text-center">
                <div className="font-serif text-5xl md:text-6xl lg:text-7xl text-gold-dark mb-2">
                  {mounted ? String(unit.value).padStart(2, "0") : "00"}
                </div>
                <div className="font-sans text-xs md:text-sm tracking-[0.2em] text-muted-foreground uppercase">
                  {unit.label}
                </div>
              </div>
              {/* Decorative corner */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-gold/40" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-gold/40" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 font-serif text-xl md:text-2xl italic text-muted-foreground"
        >
          &ldquo;Two souls, one heart&rdquo;
        </motion.p>
      </div>
    </section>
  );
}

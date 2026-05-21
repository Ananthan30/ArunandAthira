"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Calendar, Navigation } from "lucide-react";

export function Venue() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.3em] text-gold-dark uppercase mb-4">
            Join Us At
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            The Venue
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Venue Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-card border border-border rounded-lg p-8 md:p-10">
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                Treesa Garden Auditorium
              </h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-muted-foreground uppercase tracking-wide mb-1">Date</p>
                    <p className="font-serif text-lg text-foreground">Sunday, August 2nd, 2026</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-muted-foreground uppercase tracking-wide mb-1">Time</p>
                    <p className="font-serif text-lg text-foreground">5:00 PM Onwards</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-muted-foreground uppercase tracking-wide mb-1">Address</p>
                    <p className="font-serif text-lg text-foreground">
                      NH66 Service Rd, Perumpadanna,<br />
                      North Paravur, Kerala 683513
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/91nbtXvJD9Jpesjn7?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gold-dark text-cream font-sans text-sm tracking-[0.1em] uppercase hover:bg-gold transition-colors duration-300 rounded-sm"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/5] rounded-lg overflow-hidden border border-border shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.123456789!2d76.2123456!3d10.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTreesa%20Garden%20Auditorium!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-gold/50" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-gold/50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

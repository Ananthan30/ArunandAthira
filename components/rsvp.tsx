"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Minus, Plus, Send, Loader2 } from "lucide-react";

export function RSVP() {
  const [fullName, setFullName] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [guestCount, setGuestCount] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName.trim() || attending === null) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const decrementGuests = () => {
    if (guestCount > 1) {
      setGuestCount(guestCount - 1);
    }
  };

  const incrementGuests = () => {
    if (guestCount < 10) {
      setGuestCount(guestCount + 1);
    }
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 md:py-32 bg-card">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center bg-secondary/50 border border-border rounded-lg p-12"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-sage/20 flex items-center justify-center">
              <Check className="w-10 h-10 text-sage" />
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Thank You!
            </h3>
            <p className="font-sans text-muted-foreground">
              {attending 
                ? `We can't wait to celebrate with you${guestCount > 1 ? ` and your ${guestCount - 1} guest${guestCount > 2 ? 's' : ''}` : ''}!`
                : "We'll miss you! Thank you for letting us know."
              }
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 md:py-32 bg-card">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-sans text-xs tracking-[0.3em] text-gold-dark uppercase mb-4">
            Will You Join Us?
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            RSVP
          </h2>
          <p className="font-sans text-muted-foreground max-w-md mx-auto">
            Please let us know if you&apos;ll be able to attend our special day.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-secondary/30 border border-border rounded-lg p-8 md:p-12"
        >
          {/* Full Name */}
          <div className="mb-8">
            <label 
              htmlFor="fullName" 
              className="block font-sans text-sm tracking-wide text-muted-foreground uppercase mb-3"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-md font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
            />
          </div>

          {/* Attendance Buttons */}
          <div className="mb-8">
            <label className="block font-sans text-sm tracking-wide text-muted-foreground uppercase mb-3">
              Will You Attend?
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setAttending(true)}
                className={`flex items-center justify-center gap-2 px-6 py-4 rounded-md border-2 font-sans text-sm tracking-wide uppercase transition-all duration-300 ${
                  attending === true
                    ? "border-sage bg-sage/10 text-sage"
                    : "border-border bg-card text-muted-foreground hover:border-sage/50"
                }`}
              >
                <Check className="w-5 h-5" />
                Joyfully Accept
              </button>
              <button
                type="button"
                onClick={() => setAttending(false)}
                className={`flex items-center justify-center gap-2 px-6 py-4 rounded-md border-2 font-sans text-sm tracking-wide uppercase transition-all duration-300 ${
                  attending === false
                    ? "border-destructive/50 bg-destructive/10 text-destructive"
                    : "border-border bg-card text-muted-foreground hover:border-destructive/30"
                }`}
              >
                <X className="w-5 h-5" />
                Regretfully Decline
              </button>
            </div>
          </div>

          {/* Guest Count - Only show if attending */}
          {attending === true && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <label className="block font-sans text-sm tracking-wide text-muted-foreground uppercase mb-3">
                Number of Guests
              </label>
              <div className="flex items-center justify-center gap-6 bg-card border border-border rounded-md p-4">
                <button
                  type="button"
                  onClick={decrementGuests}
                  disabled={guestCount <= 1}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <div className="text-center min-w-[80px]">
                  <span className="font-serif text-4xl text-foreground">{guestCount}</span>
                  <p className="font-sans text-xs text-muted-foreground mt-1">
                    {guestCount === 1 ? "Guest" : "Guests"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={incrementGuests}
                  disabled={guestCount >= 10}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!fullName.trim() || attending === null || isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gold-dark text-cream font-sans text-sm tracking-[0.15em] uppercase hover:bg-gold disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 rounded-md"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send RSVP
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

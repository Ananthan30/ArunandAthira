import { Hero } from "@/components/hero";
import { Countdown } from "@/components/countdown";
import { Venue } from "@/components/venue";
import { RSVP } from "@/components/rsvp";
import { Footer } from "@/components/footer";
import { CardOpening } from "@/components/card-opening";

export default function WeddingPage() {
  return (
    <CardOpening>
      <main className="min-h-screen">
        <Hero />
        <Countdown />
        <Venue />
        <RSVP />
        <Footer />
      </main>
    </CardOpening>
  );
}

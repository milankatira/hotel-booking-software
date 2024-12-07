import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/utils/animations";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Experience Luxury Living
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl mb-8"
        >
          Discover the perfect blend of comfort and elegance at our premium hotel
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="space-x-4"
        >
          <Link href="/booking">
            <Button size="lg" variant="default">
              Book Now
            </Button>
          </Link>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
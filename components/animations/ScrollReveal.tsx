import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  variants?: any;
}

export default function ScrollReveal({
  children,
  width = "fit-content",
  variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 }
  }
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}

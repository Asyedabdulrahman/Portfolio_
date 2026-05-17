"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TimelineItemWrapperProps {
  children: ReactNode;
  index: number;
}

export const TimelineItemWrapper = ({ children, index }: TimelineItemWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.3), ease: "easeOut" }}
      className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-stretch group"
    >
      {children}
    </motion.div>
  );
};

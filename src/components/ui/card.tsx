import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: "var(--card-hover-shadow)" } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        "bg-surface border border-border-primary rounded-lg p-6 transition-all",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

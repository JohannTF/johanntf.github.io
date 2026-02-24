import { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "../../lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const SPRING_CONFIG = { stiffness: 300, damping: 20, mass: 0.5 };
const MAX_TILT = 10; // degrees

export function TiltCard({ children, className, href }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, SPRING_CONFIG);
  const rotateY = useSpring(rawRotateY, SPRING_CONFIG);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      rawRotateX.set(((y - cy) / cy) * -MAX_TILT);
      rawRotateY.set(((x - cx) / cx) * MAX_TILT);
      setMousePos({ x, y });
    },
    [rawRotateX, rawRotateY],
  );

  const handleMouseLeave = useCallback(() => {
    rawRotateX.set(0);
    rawRotateY.set(0);
  }, [rawRotateX, rawRotateY]);

  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={cn("block", href && "cursor-pointer")}
    >
      <div
        ref={cardRef}
        className="group relative rounded-xl p-[1px] perspective-[800px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Animated conic-gradient border — visible on hover */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
          <div className="absolute inset-[-200%] animate-luxury-border bg-[conic-gradient(from_0deg,transparent_0_330deg,var(--text-primary)_360deg)]" />
        </div>

        {/* Pointer glow overlay */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
          style={{
            background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 80%)`,
          }}
        />

        {/* Card body with 3D tilt */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className={cn(
            "relative rounded-xl bg-surface border border-border-primary p-6 overflow-hidden z-20",
            className,
          )}
        >
          {/* Shine sweep on hover */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 overflow-hidden rounded-xl">
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {children}
        </motion.div>
      </div>
    </Wrapper>
  );
}

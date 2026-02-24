import { useRef, useState, useCallback } from "react";
import { Users, Shield, RefreshCw, Compass } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { SoftSkill } from "../../lib/data";

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  shield: Shield,
  refresh: RefreshCw,
  compass: Compass,
};

interface SoftSkillCardProps {
  skill: SoftSkill;
}

export function SoftSkillCard({ skill }: SoftSkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const Icon = iconMap[skill.iconKey];

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group relative rounded-xl border border-border-primary bg-surface overflow-hidden transition-shadow duration-300 hover:[box-shadow:var(--card-hover-shadow)]"
    >
      {/* Pointer-revealed radial glow */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.07), transparent 70%)`,
        }}
      />

      {/* Subtle border glow that follows pointer */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-xl transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.04), transparent 60%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      {/* Card content */}
      <div className="relative z-20 p-6">
        {/* Title centered */}
        <h3 className="text-base font-semibold text-text-primary text-center mb-5">
          {skill.title}
        </h3>

        {/* Two columns: icon left, text right */}
        <div className="flex items-start gap-5">
          {/* Icon */}
          <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-lg border border-border-primary bg-bg-secondary text-text-secondary group-hover:text-text-primary group-hover:border-text-secondary/30 transition-colors duration-300">
            {Icon && <Icon size={24} strokeWidth={1.5} />}
          </div>

          {/* Description */}
          <p className="text-sm text-text-secondary leading-relaxed">
            {skill.description}
          </p>
        </div>
      </div>
    </div>
  );
}

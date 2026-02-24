import { technologies } from "../../lib/data";
import { SectionContainer } from "../layout/SectionContainer";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../lib/utils";
import type { IconType } from "react-icons";

// ── Simple Icons (react-icons/si) ──
import {
  SiPython,
  SiCplusplus,
  SiTypescript,
  SiReact,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiLinux,
  SiGooglecloud
} from "react-icons/si";
import { FaJava, FaMicrosoft } from "react-icons/fa";

// ── Icon Map ──
const iconMap: Record<string, IconType> = {
  python: SiPython,
  cplusplus: SiCplusplus,
  java: FaJava,
  typescript: SiTypescript,
  react: SiReact,
  springboot: SiSpringboot,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  docker: SiDocker,
  git: SiGit,
  linux: SiLinux,
  googlecloud: SiGooglecloud,
  azure: FaMicrosoft,
};

// ── Main Section ──
export function TechnologiesSection() {
  return (
    <SectionContainer
      id="technologies"
      title="Tecnologías"
      subtitle="Herramientas y tecnologías con las que trabajo"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-3"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        }}
      >
        {technologies.map((tech) => {
          const Icon = iconMap[tech.iconKey];
          return (
            <motion.div
              key={tech.id}
              variants={fadeInUp}
              className="group relative flex flex-col items-center justify-center gap-4 w-full py-12 rounded-xl border border-border-primary bg-surface overflow-hidden transition-all duration-300 hover:[box-shadow:var(--card-hover-shadow)]"
            >
              {/* Liquid fill sweep */}
              <span
                className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-xl"
                style={{ backgroundColor: tech.brandColor, opacity: 0.08 }}
              />

              {/* Icon */}
              {Icon && (
                <Icon
                  size={36}
                  className="relative z-10 text-text-secondary group-hover:text-[var(--tech-brand)] transition-colors duration-500"
                  style={{ "--tech-brand": tech.brandColor } as React.CSSProperties}
                />
              )}

              {/* Name */}
              <span className="relative z-10 text-[11px] font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}

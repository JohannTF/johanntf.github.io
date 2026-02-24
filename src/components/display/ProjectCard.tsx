import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Globe } from "lucide-react";
import type { Project } from "../../lib/data";

const EASE_OUT_QUINT = [0.23, 1, 0.32, 1] as const;

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded((prev) => !prev)}
      className="cursor-pointer border border-border-primary rounded-xl bg-surface overflow-hidden transition-shadow duration-300 hover:[box-shadow:var(--card-hover-shadow)]"
      transition={{ layout: { duration: 0.3, ease: EASE_OUT_QUINT } }}
    >
      {/* Project image */}
      <div className="relative w-full h-48 overflow-hidden bg-bg-secondary">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
      </div>

      {/* Header */}
      <div className="p-5 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-text-primary truncate">
            {project.title}
          </h3>
          <p className="text-xs text-text-secondary mt-0.5 truncate">
            {project.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden sm:inline text-xs text-text-secondary font-mono">
            {project.period}
          </span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT_QUINT }}
          >
            <ChevronDown size={16} className="text-text-secondary" />
          </motion.div>
        </div>
      </div>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.35, ease: EASE_OUT_QUINT },
              opacity: { duration: 0.25, delay: 0.05 },
            }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-border-primary pt-4">
              {/* Period visible on mobile inside expanded area */}
              <span className="sm:hidden text-xs text-text-secondary font-mono block mb-2">
                {project.period}
              </span>

              <p className="text-sm text-text-secondary leading-relaxed">
                {project.description}
              </p>

              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-bg-secondary text-text-primary border border-border-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Owner + repo link + deploy link */}
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-border-primary">
                <div className="flex items-center gap-2">
                  <img
                    src={project.owner.avatar}
                    alt={project.owner.name}
                    className="w-6 h-6 rounded-full border border-border-primary"
                  />
                  <span className="text-xs text-text-secondary">
                    {project.owner.name}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  {project.deployUrl && (
                    <a
                      href={project.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs font-medium text-text-primary hover:opacity-70 transition-opacity"
                    >
                      Ver proyecto
                      <Globe size={12} />
                    </a>
                  )}
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors"
                  >
                    Repositorio
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

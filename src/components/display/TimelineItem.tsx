import { motion } from "framer-motion";
import { scaleIn } from "../../lib/utils";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tags: string[];
  index: number;
}

export function TimelineItem({
  title,
  subtitle,
  period,
  description,
  tags,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Line */}
      <div className="absolute left-[7px] top-3 bottom-0 w-[1px] bg-border-primary" />

      {/* Dot */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-text-primary border-[3px] border-bg-primary shadow-sm"
      />

      {/* Content */}
      <div className="bg-surface border border-border-primary rounded-lg p-5 ml-4 transition-shadow duration-300 hover:[box-shadow:var(--card-hover-shadow)]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
          <h3 className="text-base font-semibold text-text-primary">{title}</h3>
          <span className="text-xs text-text-secondary font-mono">{period}</span>
        </div>
        <p className="text-xs text-text-secondary mb-2 font-medium">{subtitle}</p>
        <p className="text-sm text-text-secondary leading-relaxed">{description}</p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-bg-secondary text-text-primary border border-border-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

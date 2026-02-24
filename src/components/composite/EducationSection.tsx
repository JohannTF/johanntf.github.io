import { education } from "../../lib/data";
import { SectionContainer } from "../layout/SectionContainer";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { fadeInUp, staggerContainer } from "../../lib/utils";

export function EducationSection() {
  return (
    <SectionContainer
      id="education"
      title="Educación"
      subtitle="Mi formación académica y trayectoria escolar"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-8"
      >
        {education.map((edu) => (
          <motion.div
            key={edu.id}
            variants={fadeInUp}
            className="relative pl-10 border-l border-border-primary"
          >
            {/* Dot */}
            <div className="absolute left-[-7px] top-1 w-3.5 h-3.5 rounded-full bg-text-primary border-2 border-bg-primary" />

            {/* Period badge */}
            <span className="inline-block text-xs font-mono text-text-secondary mb-1">
              {edu.period}
            </span>

            {/* Card */}
            <div className="bg-surface border border-border-primary rounded-xl p-6 transition-shadow duration-300 hover:[box-shadow:var(--card-hover-shadow)]">
              <div className="flex items-start gap-3">
                <GraduationCap
                  size={20}
                  className="text-text-primary mt-0.5 shrink-0"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text-primary">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-text-secondary mt-0.5">
                    {edu.institution}
                  </p>

                  {edu.gpa && (
                    <div className="mt-3 flex items-center gap-2 text-sm text-text-primary">
                      <Award size={14} className="text-text-secondary" />
                      <span>
                        Promedio: <strong>{edu.gpa}</strong>
                      </span>
                    </div>
                  )}

                  {edu.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {edu.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-sm text-text-secondary leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-text-primary mt-1.5 shrink-0 w-1 h-1 rounded-full bg-text-primary inline-block" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}

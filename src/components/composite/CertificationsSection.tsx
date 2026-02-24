import { certifications } from "../../lib/data";
import { SectionContainer } from "../layout/SectionContainer";
import { TiltCard } from "../display/TiltCard";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../lib/utils";
import { Award, ExternalLink } from "lucide-react";

export function CertificationsSection() {
  return (
    <SectionContainer
      id="certifications"
      title="Certificaciones & Logros"
      subtitle="Reconocimientos y formación complementaria"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {certifications.map((cert) => (
          <motion.div key={cert.id} variants={fadeInUp}>
            <TiltCard href={cert.url}>
              <div className="flex flex-col gap-3">
                {/* Icon + issuer */}
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full border border-border-primary bg-bg-primary">
                    <Award size={16} className="text-text-primary" />
                  </span>
                  <span className="text-xs text-text-secondary font-medium">
                    {cert.issuer}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-text-primary leading-snug">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed">
                  {cert.description}
                </p>

                {/* Period + tags + link indicator */}
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="text-[10px] font-mono text-text-secondary">
                    {cert.period}
                  </span>
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-bg-secondary text-text-primary border border-border-primary"
                    >
                      {tag}
                    </span>
                  ))}
                  {cert.url && (
                    <span className="ml-auto flex items-center gap-1 text-[10px] text-text-secondary">
                      Ver certificado <ExternalLink size={10} />
                    </span>
                  )}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}

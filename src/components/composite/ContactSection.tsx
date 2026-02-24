import { Mail, ExternalLink, FileDown } from "lucide-react";
import { CONTACT, SOCIAL_LINKS } from "../../lib/constants";
import { personalInfo } from "../../lib/data";
import { SectionContainer } from "../layout/SectionContainer";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../lib/utils";

export function ContactSection() {
  return (
    <SectionContainer
      id="contact"
      title="Contacto"
      subtitle="¿Tienes un proyecto en mente? ¡Hablemos!"
    >
      <div className="max-w-4xl mx-auto">
        {/* Two-column layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10"
        >
          {/* Left — Contact info */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-1">Escríbeme</h3>
              <p className="text-sm text-text-secondary">Estoy disponible para oportunidades y colaboraciones.</p>
            </div>

            {/* Email */}
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-4 group/mail"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full border border-border-primary bg-bg-primary group-hover/mail:bg-text-primary group-hover/mail:text-bg-primary transition-colors duration-200">
                <Mail size={20} className="text-text-primary group-hover/mail:text-bg-primary" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-text-secondary">Correo electrónico</p>
                <p className="text-text-primary font-medium group-hover/mail:underline">Enviar correo</p>
              </div>
            </a>

            {/* Social links */}
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border-primary text-text-primary text-sm hover:bg-text-primary hover:text-bg-primary transition-colors duration-200"
                >
                  <s.icon size={16} />
                  {s.label}
                  <ExternalLink size={12} className="opacity-50" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — CV download card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, boxShadow: "var(--card-hover-shadow)" }}
            transition={{ duration: 0.2 }}
            className="border border-border-primary rounded-xl p-8 flex flex-col items-center justify-center text-center gap-4 bg-surface transition-shadow duration-300 h-full"
          >
            <div className="w-14 h-14 rounded-full border border-border-primary flex items-center justify-center">
              <FileDown size={24} className="text-text-primary" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-text-primary">Curriculum Vitae</h4>
              <p className="text-xs text-text-secondary mt-1">Descarga mi CV en formato PDF</p>
            </div>
            <Button variant="outline" size="md" href={personalInfo.cvUrl} download>
              <FileDown size={14} className="mr-2" />
              Descargar CV
            </Button>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button href={`mailto:${CONTACT.email}`} size="lg">
            Enviar correo
          </Button>
        </motion.div>
      </div>
    </SectionContainer>
  );
}

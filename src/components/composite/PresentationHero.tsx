import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { personalInfo } from "../../lib/data";
import { SOCIAL_LINKS, CONTACT } from "../../lib/constants";
import { Button } from "../ui/button";
import { fadeInUp, staggerContainer } from "../../lib/utils";
import { useTheme } from "../../lib/theme";

export function PresentationHero() {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Left — Info */}
        <motion.div variants={fadeInUp} className="order-2 md:order-1">
          <motion.p
            variants={fadeInUp}
            className="text-sm text-text-secondary font-mono mb-2"
          >
            Hola, soy
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-tight"
          >
            {personalInfo.name}
            <br />
            <span className="text-text-secondary">{personalInfo.lastName}</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-2 text-sm font-medium text-text-primary"
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-sm text-text-secondary leading-relaxed max-w-md"
          >
            {personalInfo.description}
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="mt-6 flex items-center gap-3"
          >
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border-primary flex items-center justify-center text-text-secondary hover:bg-text-primary hover:text-bg-primary hover:border-text-primary transition-all duration-300"
              >
                <s.icon size={16} />
              </a>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button variant="primary" href="#contact">
              Contacto
            </Button>
            <Button variant="outline" href={personalInfo.cvUrl}>
              <Download size={14} className="mr-2" />
              Descargar CV
            </Button>
          </motion.div>
        </motion.div>

        {/* Right — Photo */}
        <motion.div
          variants={fadeInUp}
          className="order-1 md:order-2 flex justify-center"
        >
          {/* Outer ring with top-half border that fades into transparent */}
          <div
            className="relative w-[22rem] h-[22rem] sm:w-[26rem] sm:h-[26rem] rounded-full p-[2px]"
            style={{
              background: `linear-gradient(to bottom, ${theme === "dark" ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.15)"} 0%, transparent 55%)`,
            }}
          >
            <div className="relative w-full h-full rounded-full overflow-hidden bg-bg-primary">
              <img
                src={personalInfo.profileImage}
                alt={`${personalInfo.name} ${personalInfo.lastName}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

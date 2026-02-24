import { softSkills } from "../../lib/data";
import { SectionContainer } from "../layout/SectionContainer";
import { SoftSkillCard } from "../display/SoftSkillCard";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../lib/utils";

export function SoftSkillsSection() {
  return (
    <SectionContainer
      id="soft-skills"
      title="Habilidades Blandas"
      subtitle="Competencias personales que complementan mi perfil técnico"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {softSkills.map((skill) => (
          <motion.div key={skill.id} variants={fadeInUp}>
            <SoftSkillCard skill={skill} />
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}

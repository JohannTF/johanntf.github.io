import { projects } from "../../lib/data";
import { SectionContainer } from "../layout/SectionContainer";
import { ProjectCard } from "../display/ProjectCard";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../lib/utils";

export function ProjectsSection() {
  return (
    <SectionContainer
      id="projects"
      title="Proyectos"
      subtitle="Aplicaciones y soluciones que he desarrollado"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={fadeInUp}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}

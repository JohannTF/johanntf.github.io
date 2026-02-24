import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { PresentationHero } from "./components/composite/PresentationHero";
import { SoftSkillsSection } from "./components/composite/SoftSkillsSection";
import { EducationSection } from "./components/composite/EducationSection";
import { TechnologiesSection } from "./components/composite/TechnologiesSection";
import { ProjectsSection } from "./components/composite/ProjectsSection";
import { CertificationsSection } from "./components/composite/CertificationsSection";
import { ContactSection } from "./components/composite/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />

      <main>
        <PresentationHero />
        <SoftSkillsSection />
        <EducationSection />
        <TechnologiesSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;

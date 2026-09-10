import HomepageHero from "../components/ui/homepagehero";
import AboutSection from "../components/ui/sections/AboutSection";
import CTASection from "../components/ui/sections/CTASection";
import ExperienceSection from "../components/ui/sections/ExperienceSection";
import ProjectsSection from "../components/ui/sections/ProjectSection";

export default function Home() {
  return (
    <>
      <HomepageHero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CTASection />
    </>
  );
}

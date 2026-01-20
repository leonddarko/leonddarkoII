import HomepageHero from "./ui/homepagehero";
import AboutSection from "./ui/sections/AboutSection";
import CTASection from "./ui/sections/CTASection";
import ExperienceSection from "./ui/sections/ExperienceSection";
import ProjectsSection from "./ui/sections/ProjectSection";

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

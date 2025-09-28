import AboutSection from "./components/AboutSection";
import CertificationSection from "./components/CertificationSection";
import EducationSection from "./components/EducationSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <main className="font-sans flex h-screen flex-col  relative bg-black">
      {/* Pearl Mist Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
        }}
      >
        <Navbar />

        <HeroSection />
        <AboutSection />
        <SkillsSection />
        {/* <EducationSection /> */}
        {/* <CertificationSection /> */}
        <ProjectsSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}

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
    <main className="flex h-screen flex-col bg-[#ffffff] font-AlbertSans">
      <Navbar />
      <div className="container mt-24 mx-auto px-14 py-14">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <CertificationSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}

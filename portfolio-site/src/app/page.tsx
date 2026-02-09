import { 
  AboutSection, 
  BlogSection, 
  CertificatesSection, 
  ContactSection, 
  ExperienceSection, 
  HeroSection, 
  ProjectsSection, 
  SkillsSection 
} from "@/components/screens";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* Projects Section */}
      <ProjectsSection />

      {/* Certificates Section */}
      <CertificatesSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Blog Post Section */}
      <BlogSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}

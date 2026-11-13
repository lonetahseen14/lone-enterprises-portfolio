import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import LeadershipPreview from "@/components/sections/LeadershipPreview";
import ProjectsPreview from "@/components/sections/ProjectsPreview";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutPreview />
        <ServicesPreview />
        <LeadershipPreview />
        <ProjectsPreview />
      </main>

      <Footer />
    </>
  );
}
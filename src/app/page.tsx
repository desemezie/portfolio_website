import About from "@/components/about";
import Education from "@/components/education";
import Banner from "@/components/banner";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 gap-50">
      <Banner />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Education />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

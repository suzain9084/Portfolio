import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { ExperienceTimeline } from "@/components/portfolio/ExperienceTimeline";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { EducationTimeline } from "@/components/portfolio/EducationTimeline";
import { BeyondProjects } from "@/components/portfolio/BeyondProjects";
import { ResumeCTA } from "@/components/portfolio/ResumeCTA";
import { ContactForm } from "@/components/portfolio/ContactForm";
import { Footer } from "@/components/portfolio/Footer";
import { ThemeProvider } from "@/hooks/use-theme";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <ExperienceTimeline />
          <Projects />
          <Achievements />
          <EducationTimeline />
          <BeyondProjects />
          <ResumeCTA />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

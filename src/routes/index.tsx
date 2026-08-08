import { createFileRoute } from "@tanstack/react-router";
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

const title = "Suzain | Software Engineer & AI/ML Developer";
const description =
  "Portfolio of Suzain — Computer Science & Engineering (AI & ML) student at the University of Delhi, building intelligent systems and scalable software.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Suzain, software engineer, AI ML developer, machine learning, full-stack developer, University of Delhi, LangChain, PyTorch, React, portfolio",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Suzain",
          email: "mailto:suzain@ce.du.ac.in",
          telephone: "+919084357325",
          jobTitle: "Software Engineer & AI/ML Developer",
          description,
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Faculty of Technology, University of Delhi",
          },
          knowsAbout: [
            "Artificial Intelligence",
            "Machine Learning",
            "Full-Stack Development",
            "Data Structures and Algorithms",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
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
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const TITLE = "Rutvik Jadhav — Data Analyst Portfolio";
const DESCRIPTION =
  "Portfolio of Rutvik Jadhav, aspiring Data Analyst skilled in Power BI, SQL, and Excel. Based in Maharashtra, India.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Rutvik Jadhav",
          jobTitle: "Data Analyst",
          email: "mailto:jadhavrutvik95@gmail.com",
          telephone: "+91-7219317445",
          address: {
            "@type": "PostalAddress",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          sameAs: ["https://linkedin.com/in/rutvik-jadhav-ab7682275"],
          knowsAbout: ["Power BI", "SQL", "Excel", "Python", "Data Analysis"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useScrollReveal();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}

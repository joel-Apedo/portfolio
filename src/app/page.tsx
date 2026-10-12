import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { LiquidTrail } from "@/components/LiquidTrail";
import { NetworkCanvas } from "@/components/NetworkCanvas";
import { getProjectsFromNotion } from "@/lib/notion";

export default async function Home() {
  const { projects } = await getProjectsFromNotion();

  return (
    <>
      <CustomCursor />
      <LiquidTrail />
      <NetworkCanvas />
      <Header />
      <main id="contenu" className="relative z-[2] flex-1">
        <Hero />
        <About />
        <Projects projects={projects} />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

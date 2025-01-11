"use client";
import About from "@/components/About";
import { ContainerScrollAnimation } from "@/components/ContainerScrollAnimation";
import Events from "@/components/Events";
import Header from "@/components/Header";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/ui/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Header />
      <ContainerScrollAnimation />
      <SectionDivider />
      <About />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}

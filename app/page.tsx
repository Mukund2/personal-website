import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Nav />
      <Hero />
      <LogoMarquee />
      <Reveal>
        <Stats />
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Portfolio />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Footer />
    </main>
  );
}

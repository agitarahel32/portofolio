import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ContactMenu from "@/components/ContactMenu";


export default function Home() {
  return (
    <main className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <ContactMenu />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}

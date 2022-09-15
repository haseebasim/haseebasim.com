import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Tools from "../components/Tools";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import BottomNav from "../components/BottomNav";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Tools />
      <Experience />
      <Contact />
      <BottomNav />
    </main>
  );
}

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Tools from "../components/Tools";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";

import { ExperienceData, ProjectsData, ToolsData } from "../util/data";
import Meta from "../components/Meta";

export default function Home({ projects, tools, experience }) {
  return (
    <main className={"relative main-container bg-accentDark"}>
      <Meta title={"Haseeb Asim"} route="/" />
      <Nav />
      <Hero />
      <Projects projects={projects} />
      <About />
      <Tools tools={tools} />
      <Experience experience={experience} />
      <Contact />
      <BottomNav />
      <Footer />
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: ProjectsData,
      tools: ToolsData,
      experience: ExperienceData,
    },
  };
}

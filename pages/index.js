import About from '../components/About';
import BottomNav from '../components/BottomNav';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Meta from '../components/Meta';
import Nav from '../components/Nav';
import Projects from '../components/Projects';
import Tools from '../components/Tools';
import { ExperienceData, ProjectsData, ToolsData } from '../util/data';

export default function Home({ projects, tools, experience }) {
  return (
    <main className="relative main-container bg-accentDark">
      <Meta title="Haseeb Asim" route="/" />
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
      experience: ExperienceData
    }
  };
}

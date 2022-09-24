import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Tools from "../components/Tools";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import BottomNav from "../components/BottomNav";
import { client } from "../util/sanity";
import Footer from "../components/Footer";
export default function Home({ projects, tools, experience }) {
  return (
    <main className={"relative main-container bg-accentDark"}>
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
  const projects = await client.fetch(`*[_type == "project"]`);
  const tools = await client.fetch(`*[_type == "tool"]`);
  const experience = await client.fetch(
    `*[_type == "experience"] | order(order asc)`
  );

  return {
    props: {
      projects,
      tools,
      experience,
    },
  };
}

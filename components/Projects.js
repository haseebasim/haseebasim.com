import ProjectCard from "./ProjectCard";
import Section from "./Section";

export default function Projects() {
  return (
    <Section reverseBg={true} id="projects">
      <div className="flex flex-col gap-y-5">
        <h1 className="text-3xl sm:text-4xl font-bold">My Projects</h1>
        <p className="text-xl sm:text-2xl sm:w-3/4 font-light">
          Here are some of my completed projects.
        </p>
      </div>
      <div className="mt-16 flex items-center flex-wrap justify-evenly gap-y-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </Section>
  );
}

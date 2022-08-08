import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b pt-24 pb-12 from-accentLight to-accentDark w-full"
    >
      <div className="min-h-screen h-full mx-auto w-full max-w-7xl text-white">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-4xl font-bold">My Projects</h1>
          <p className="text-2xl w-3/4 font-light">
            A collection of my recent works.A collection of my recent works.A
            collection of my recent works.A collection of my recent works.
          </p>
        </div>
        <div className="mt-16 flex items-center justify-between">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}

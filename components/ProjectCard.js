import Image from 'next/image';

export default function ProjectCard({ project }) {
  return (
    <div className=" w-[320px] max-h-[515px] min-h-[515px] flex flex-col  card-box-shadow rounded-[20px] bg-white bg-opacity-[0.07]">
      <div className="relative w-full h-[220px]">
        <Image
          loading="lazy"
          className="rounded-t-[20px]"
          src={project.img}
          alt="project img"
          layout="fill"
        />
      </div>
      <div className="w-full min-h-[295px] flex flex-col justify-between px-[28px] py-[25px] ">
        <div className="w-full flex flex-col gap-y-3">
          <p className="text-2xl">{project.title}</p>
          <p className="text-base">{project.description}</p>
        </div>
        <div>
          <p className="text-sm">
            <span className="font-semibold">Tech stack :</span> {project.technologies.join(' , ')}
          </p>
          <div className="flex justify-between items-center text-primary mt-5">
            <a
              target="_blank"
              href={project.preview}
              className="flex gap-x-2 text-sm items-center"
              rel="noreferrer"
            >
              <Image
                loading="lazy"
                src="/icons/link_icon.svg"
                alt="project img"
                width={20}
                height={20}
              />
              <div>
                <p className="link-hover">Live Preview</p>
                <div className="border-b-2 transition-all duration-300 border-primary w-0"></div>
              </div>
            </a>
            {project.github && (
              <a
                target="_blank"
                href={project.github}
                className="flex text-sm gap-x-2 items-center"
                rel="noreferrer"
              >
                <Image
                  loading="lazy"
                  src="/icons/github_link_icon.svg"
                  alt="project img"
                  width={20}
                  height={20}
                />
                <div>
                  <p className="link-hover">View Code</p>
                  <div className="border-b-2 transition-all duration-300 border-primary w-0"></div>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { client } from "../util/sanity";

export default function ProjectCard({ project }) {
  const imageProps = useNextSanityImage(client, project.image);
  return (
    <div className=" w-[320px] max-h-[515px] min-h-[515px] flex flex-col  card-box-shadow rounded-[20px] bg-white bg-opacity-[0.07]">
      <div className="relative w-full h-[220px]">
        <Image
          loading="lazy"
          className="rounded-t-[20px]"
          {...imageProps}
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
            <span className="font-semibold">Tech stack :</span>{" "}
            {project.stack.join(" , ")}
          </p>
          <div className="flex justify-between items-center text-primary mt-5">
            <a
              target={"_blank"}
              href={project.preview}
              className="flex gap-x-2 text-sm items-center"
              rel="noreferrer"
            >
              <Image
                loading="lazy"
                src={"/icons/link_icon.svg"}
                alt="project img"
                width={20}
                height={20}
              />
              <p className="link-hover">
                Live Preview
                <div className="border-b-2 transition-all duration-300 border-primary w-0"></div>
              </p>
            </a>
            {project.code && (
              <a
                target={"_blank"}
                href={project.code}
                className="flex text-sm gap-x-2 items-center"
                rel="noreferrer"
              >
                <Image
                  loading="lazy"
                  src={"/icons/github_link_icon.svg"}
                  alt="project img"
                  width={20}
                  height={20}
                />
                <p className="link-hover">
                  View Code
                  <div className="border-b-2 transition-all duration-300 border-primary w-0"></div>
                </p>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

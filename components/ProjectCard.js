import Image from "next/image";

export default function ProjectCard() {
  return (
    <div className="w-[320px] card-box-shadow rounded-[20px] bg-white bg-opacity-[0.07]">
      <div className="relative w-full h-[220px]">
        <Image
          src={"/images/project-card-img.png"}
          alt="project img"
          layout="fill"
        />
      </div>
      <div className="w-full px-[28px] py-[25px] ">
        <div className="w-full flex flex-col gap-y-3">
          <p className="text-2xl">Project Title goes here</p>
          <p className="text-base">
            This is sample project description random things are here in
            description This is sample project lorem ipsum generator for dummy
            content
          </p>
          <p className="text-sm">
            <span className="font-semibold">Tech stack :</span> HTML ,
            JavaScript, SASS, React
          </p>
        </div>
        <div className="flex justify-between items-center text-primary mt-5">
          <a href="" className="flex gap-x-2 text-sm items-center">
            <Image
              src={"/icons/link_icon.svg"}
              alt="project img"
              width={20}
              height={20}
            />
            <span>Live Preview</span>
          </a>
          <a href="" className="flex text-sm gap-x-2 items-center">
            <Image
              src={"/icons/github_link_icon.svg"}
              alt="project img"
              width={20}
              height={20}
            />
            <span>View Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}

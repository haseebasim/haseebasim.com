/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-gradient-to-b pt-40 pb-20 from-accentDark to-accentLight w-full">
      <div className="w-full min-h-screen h-full max-w-7xl mx-auto text-white">
        <p className="text-4xl font-bold mb-10">About Me</p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-y-5 text-xl w-[46.6vw]">
            <p>My name is Haseeb Asim</p>
            <p>
              I’m from Lahore, Pakistan.I have a Bachelor degree in Computer
              Science from National University of Sciences and Technology
              (NUST). Always have been in love with technology and it's all
              possibilities.
            </p>
            <p>
              I’ve always had a facination with the web and I’ve always wanted
              to know how things on the web worked, how the websites were
              developed and how everything is connected on the web. This
              facination led me to pursue a degree in computer science and
              become a Full-stack Developer.
            </p>
            <p>
              Currently I am freelance developer and have had the privileged of
              working with really amazing clients. My main focus these days is
              to grow my skill and help my clients in building accessible,
              inclusive products and digital experiences.
            </p>
            <p className="italic font-bold text-primary">
              I am a dedicated individual who is intrigued and eager to
              constantly provide my best effort to whatever task is assigned to
              me. If there's something I don't know, I'll figure out how to
              learn it.
            </p>
          </div>
          <div className="relative w-[453px] h-[595px]">
            <Image src={"/images/about_img.png"} alt="Me" layout="fill" />
          </div>
        </div>
      </div>
    </section>
  );
}

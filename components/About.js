/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Section from "./Section";

export default function About() {
  return (
    <Section id={"about"}>
      <p className="text-3xl sm:text-4xl font-bold mb-10">About Me</p>
      <div className="grid gap-y-10 lg:grid-cols-2 w-full items-center justify-items-center lg:justify-items-end">
        <div className="flex flex-col gap-y-5 text-lg">
          <p>My name is Haseeb Asim</p>
          <p>
            I’m from Lahore, Pakistan.I have a Bachelor degree in Computer
            Science from National University of Sciences and Technology (NUST).
            Always have been in love with technology and it's all possibilities.
          </p>
          <p>
            I’ve always had a facination with the web and I’ve always wanted to
            know how things on the web worked, how the websites were developed
            and how everything is connected on the web. This facination led me
            to pursue a degree in computer science and become a Full-stack
            Developer.
          </p>
          <p>
            Currently I am freelance developer and have had the privileged of
            working with really amazing clients. My main focus these days is to
            grow my skill and help my clients in building accessible, inclusive
            products and digital experiences.
          </p>
          <p className="italic font-bold text-primary">
            I am a dedicated individual who is intrigued and eager to constantly
            provide my best effort to whatever task is assigned to me. If
            there's something I don't know, I'll figure out how to learn it.
          </p>
        </div>
        <div className="relative w-[253px] h-[355px] sm:w-[353px] sm:h-[453px] lg:w-[453px] lg:h-[595px]">
          <Image src={"/images/about_img.png"} alt="Me" layout="fill" />
        </div>
      </div>
    </Section>
  );
}

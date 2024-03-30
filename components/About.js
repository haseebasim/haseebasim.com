/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

import Section from './Section';

export default function About() {
  return (
    <Section>
      <p className="text-3xl sm:text-4xl  font-bold mb-10" id="about">
        About Me
      </p>
      <div className="grid gap-y-10 lg:grid-cols-2 w-full items-start justify-items-center lg:justify-items-end">
        <div className="flex flex-col gap-y-5 text-lg">
          <p>
            Hey there, I'm Haseeb Asim, a Full-Stack developer fueled by a passion for learning and
            creating with technology.
          </p>
          <p>
            I've always been drawn to software and its potential to make a difference. That's what
            led me to become a developer. My goal? To craft digital experiences that stand out,
            collaborate with great minds, and stay ahead with the latest tech.
          </p>
          <p className="italic font-bold text-primary">
            I've been lucky to work with amazing clients, helping them achieve their business goals.
            It's been a fulfilling journey, building strong relationships based on trust and
            success.
          </p>
        </div>
        <div className="relative w-[253px] h-[355px] sm:w-[353px] sm:h-[453px] lg:w-[453px] lg:h-[595px]">
          <Image loading="lazy" src="/images/about_img.png" alt="Me" layout="fill" />
        </div>
      </div>
    </Section>
  );
}

import Image from 'next/image';

import CustomLink from './common/CustomLink';
import Section from './Section';

export default function Hero() {
  return (
    <>
      <Section>
        <div className="hero-container flex justify-between items-center py-36 xl:py-16">
          <div className="flex sm:w-2/4 sm:text-start text-center sm:items-start items-center  text-white flex-col gap-y-5">
            <div className=" font-bold">
              <h1 className="text-3xl sm:text-5xl lg:text-4xl xl:text-5xl mb-2">
                Hi, I am <span className="text-primary">Haseeb Asim</span>
              </h1>
              <p className="text-2xl sm:text-3xl xl:text-4xl">Full Stack Developer</p>
            </div>
            <h4 className="text-lg xl:text-xl font-normal">
              I am a Full Stack Developer, developing exceptional digital experiences with a touch
              of the cloud.
            </h4>
            <a
              className="hover:stroke-white stroke-[#474747] transition-all duration-300 hover:bg-accentLight shadow-md shadow-accentDark hover:text-white w-[236px] font-semibold text-black h-[50px] bg-white flex items-center rounded justify-center gap-x-2"
              href="mailto:haseebzaidi321@gmail.com?subject=Hi"
            >
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.1434 1H2.8577C2.22652 1 1.71484 1.51167 1.71484 2.14286V15.8571C1.71484 16.4883 2.22652 17 2.8577 17H21.1434C21.7746 17 22.2863 16.4883 22.2863 15.8571V2.14286C22.2863 1.51167 21.7746 1 21.1434 1Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M1.71484 2.71436L12.0006 9.00007L22.2863 2.71436"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span>haseebzaidi321@gmail</span>
            </a>
            <div className="flex gap-x-4">
              <CustomLink href="https://github.com/haseebasim" img="/icons/github_icon.svg" />
              <CustomLink
                href="https://www.linkedin.com/in/haseebrz/"
                img="/icons/linkedin_icon.svg"
              />
            </div>
          </div>
          <div className="sm:block hidden relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]">
            <Image loading="lazy" src="/images/hero-img.png" alt="hero-img" layout="fill" />
          </div>
        </div>
      </Section>
    </>
  );
}

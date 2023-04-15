import Image from 'next/image';

import CustomLink from './common/CustomLink';
import { DownloadHeroSvg } from './common/svgs/downloadHeroSvg';
import { EmailHeroSvg } from './common/svgs/emailHeroSvg';
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
            <div className="flex gap-x-4 gap-y-4 lg:flex-row flex-col">
              <a
                className="hover:stroke-white stroke-[#474747] transition-all duration-300 hover:bg-accentLight shadow-md shadow-accentDark hover:text-white w-[236px] font-semibold text-black h-[50px] bg-white flex items-center rounded justify-center gap-x-2"
                href="mailto:haseebzaidi321@gmail.com?subject=Hi"
              >
                <EmailHeroSvg />
                <span>haseebzaidi321@gmail</span>
              </a>

              <a
                className="hover:fill-white fill-[#474747] transition-all duration-300 hover:bg-accentLight shadow-md shadow-accentDark hover:text-white w-[236px] font-semibold text-black h-[50px] bg-white flex items-center rounded justify-center gap-x-2"
                href="/Resume.pdf"
                download="Syed Haseeb Asim Zaidi Resume"
              >
                <DownloadHeroSvg />
                <span>Resume</span>
              </a>
            </div>
            <div className="flex gap-x-4">
              <CustomLink href="https://github.com/haseebasim" img="/icons/github_icon.svg" />
              <CustomLink
                href="https://www.linkedin.com/in/haseebrz/"
                img="/icons/linkedin_icon.svg"
              />
              <CustomLink href="https://medium.com/@haseebzaidi321" img="/icons/medium-logo.svg" />
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

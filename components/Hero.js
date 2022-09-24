import Image from "next/image";
import Section from "./Section";

export default function Hero() {
  return (
    <>
      <Section>
        <div className="hero-container flex justify-between items-center py-36 xl:py-16">
          <div className="flex sm:w-2/4 sm:text-start text-center sm:items-start items-center  text-white flex-col gap-y-5">
            <div className=" font-bold">
              <p className="text-3xl sm:text-5xl lg:text-4xl xl:text-5xl mb-2">
                Hi, I am <span className="text-primary">Haseeb Asim</span>
              </p>
              <p className="text-2xl sm:text-3xl xl:text-4xl">
                Full Stack Developer
              </p>
            </div>
            <p className="text-lg xl:text-xl font-normal">
              I am a Full Stack Developer, developing exceptional digital
              experiences with a touch of the cloud.
            </p>
            <a
              className="w-[236px] font-semibold text-black h-[50px] bg-white flex items-center rounded justify-center gap-x-2"
              href="mailto:haseebzaidi321@gmail.com?subject=Hi"
            >
              <Image
                loading="lazy"
                src={"/icons/email_icon.svg"}
                alt=""
                height={20}
                width={16}
              />
              <span>haseebzaidi321@gmail</span>
            </a>
            <div className="flex gap-x-4">
              <a
                href="https://github.com/haseebasim"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  loading="lazy"
                  src={"/icons/github_icon.svg"}
                  alt=""
                  height={32}
                  width={32}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/haseebrz/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  loading="lazy"
                  src={"/icons/linkedin_icon.svg"}
                  alt=""
                  height={32}
                  width={32}
                />
              </a>
            </div>
          </div>
          <div className="sm:block hidden relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]">
            <Image
              loading="lazy"
              src={"/images/hero-img.png"}
              alt="hero-img"
              layout="fill"
            />
          </div>
        </div>
      </Section>
    </>
  );
}

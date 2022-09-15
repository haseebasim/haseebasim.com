import Image from "next/image";
import Section from "./Section";

export default function Hero() {
  return (
    <>
      <Section minHeight={false}>
        <div className="flex justify-center items-center py-40 lg:py-10 xl:py-0">
          <div className="flex lg:w-2/4 lg:text-start text-center lg:items-start items-center  text-white flex-col gap-y-5">
            <div className=" font-bold">
              <p className="text-3xl sm:text-5xl lg:text-4xl xl:text-5xl mb-2">
                Hi, I am <span className="text-primary">Haseeb Asim</span>
              </p>
              <p className="text-2xl sm:text-4xl lg:text-3xl xl:text-4xl">
                Full Stack Developer
              </p>
            </div>
            <p className="text-lg xl:text-2xl font-semibold">
              I help businesses and companies reach their goals by designing
              user-centric digital products & interactive experiences.
            </p>
            <a
              className="w-[236px] font-semibold text-black h-[50px] bg-white flex items-center rounded justify-center gap-x-2"
              href="mailto:haseebzaidi321@gmail.com"
            >
              <Image
                src={"/icons/email_icon.svg"}
                alt=""
                height={20}
                width={16}
              />
              <span>haseebzaidi321@gmail</span>
            </a>
            <div className="flex gap-x-4">
              <a href="">
                <Image
                  src={"/icons/github_icon.svg"}
                  alt=""
                  height={32}
                  width={32}
                />
              </a>
              <a href="">
                <Image
                  src={"/icons/linkedin_icon.svg"}
                  alt=""
                  height={32}
                  width={32}
                />
              </a>
            </div>
          </div>
          <div className="lg:block hidden relative w-[500px] h-[500px] xl:w-[750px] xl:h-[750px]">
            <Image src={"/images/hero-boy.png"} alt="hero-img" layout="fill" />
          </div>
        </div>
      </Section>
    </>
  );
}

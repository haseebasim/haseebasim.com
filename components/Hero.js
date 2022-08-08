import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b pt-24 pb-12 from-accentDark to-accentLight w-full">
      <div className="min-h-screen h-full w-full max-w-7xl flex items-center justify-between mx-auto">
        <div className="flex text-white flex-col gap-y-10">
          <div className="text-6xl font-bold">
            <p className="mb-2">
              Hi, I am <span className="text-primary">Haseeb Asim</span>
            </p>
            <p>A Web Developer</p>
          </div>
          <p className="w-[31.7vw] text-2xl font-semibold">
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
        <div className="relative w-[786px] h-[786px]">
          <Image
            src={"/images/hero-boy.png"}
            alt="hero-img"
            layout="fill"
            // width={786}
            // height={786}
          />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Section from "./Section";

export default function Contact() {
  return (
    <Section reverseBg={true} id="contact">
      <div className=" grid lg:grid-cols-2 items-center justify-items-end">
        <div className="flex flex-col gap-y-10">
          <h1 className="text-3xl sm:text-4xl font-bold">Contact Me</h1>
          <p className="text-xl sm:text-2xl sm:w-3/4 font-light">
            Have a job opportunity or want to collaborate on a project? my inbox
            is always open. Whether you have a question or just want to say hi,
            I’ll try my best to get back to you!
          </p>
          <a
            href="mailto:haseebzaidi321@gmail.com"
            className="transition-all duration-300 hover:bg-accentLight shadow-md shadow-accentDark hover:text-white flex items-center justify-center cursor-pointer text-xl h-[50px] w-60 bg-white rounded text-black"
          >
            Say Hello
          </a>
        </div>
        <div className="hidden lg:block relative w-[350px] h-[350px] xl:w-[444px] xl:h-[444px] mr-0">
          <Image
            loading="lazy"
            src={"/images/contact.svg"}
            layout="fill"
            alt="contact"
          />
        </div>
      </div>
    </Section>
  );
}

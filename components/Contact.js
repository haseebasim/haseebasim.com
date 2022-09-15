import Image from "next/image";
import { ContactForm } from "./ContactForm";
import Section from "./Section";

export default function Contact() {
  return (
    <Section reverseBg={true} id="contact">
      <div className="flex flex-col gap-y-5">
        <h1 className="text-3xl sm:text-4xl font-bold">Contact Me</h1>
        <p className="text-xl sm:text-2xl sm:w-3/4 font-light">
          If you want to say anything to me, feel free to contact me on the form
          below.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-2 items-center justify-items-end">
        <ContactForm />
        <div className="hidden lg:block relative w-[350px] h-[350px] xl:w-[444px] xl:h-[444px] mr-0">
          <Image src={"/images/contact.svg"} layout="fill" alt="contact" />
        </div>
      </div>
    </Section>
  );
}

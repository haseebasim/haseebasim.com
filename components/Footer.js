import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full flex justify-between items-center max-w-7xl mx-auto text-white h-16">
      <p>Developed with love by Haseeb Asim</p>
      <div className="flex gap-x-4">
        <a
          href="mailto:haseebzaidi321@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={"/icons/email_link_icon.svg"}
            alt=""
            height={32}
            width={32}
          />
        </a>
        <a
          href="https://github.com/haseebasim"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={"/icons/github_icon.svg"} alt="" height={32} width={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/haseebrz/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={"/icons/linkedin_icon.svg"}
            alt=""
            height={32}
            width={32}
          />
        </a>
      </div>
    </div>
  );
}
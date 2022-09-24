import Image from "next/image";

export default function Nav() {
  return (
    <nav className="nav-container px-10 xl:p-0 w-full h-max absolute inset-0 mt-5">
      <div className="max-w-7xl text-white  flex justify-between items-center mx-auto w-full">
        <div>
          <Image loading="lazy" alt="nav-brand" src={"/icons/HA.svg"} width={60} height={60} />
        </div>
        <div className="hidden sm:flex capitalize text-base  gap-x-[5.35vw]">
          <a className="hover:text-primary transition-colors duration-300" href="#projects">Projects</a>
          <a className="hover:text-primary transition-colors duration-300" href="#about">About me</a>
          <a className="hover:text-primary transition-colors duration-300" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

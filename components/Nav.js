import Image from "next/image";

export default function Nav() {
  return (
    <nav className="px-10 xl:p-0 w-full h-max absolute inset-0 mt-5">
      <div className="max-w-7xl text-white  flex justify-between items-center mx-auto w-full">
        <div>
          <Image alt="nav-brand" src={"/icons/HA.svg"} width={60} height={60} />
        </div>
        <div className="hidden sm:flex capitalize text-base  gap-x-[5.35vw]">
          <a href="#projects">Projects</a>
          <a href="#about">About me</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

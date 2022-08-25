import Image from "next/image";

export default function Nav() {
  return (
    <nav className="w-full h-max absolute inset-0 mt-5">
      <div className="max-w-7xl text-white  flex justify-between items-center mx-auto w-full">
        <div>
          <Image alt="nav-brand" src={"/icons/HA.svg"} width={60} height={60} />
        </div>
        <div className="capitalize text-base flex gap-x-[5.35vw]">
          <a href="#">Projects</a>
          <a href="#">About me</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}

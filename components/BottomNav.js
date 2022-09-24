
export default function BottomNav() {
  return (
    <nav className="z-10 px-10 xl:p-0 w-full  bg-primary fixed sm:hidden bottom-0">
      <div className="max-w-7xl text-black h-[50px] flex justify-between items-center mx-auto w-full">
        <a href="#projects">Projects</a>
        <a href="#about">About me</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

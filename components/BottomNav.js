import Link from 'next/link';

export default function BottomNav() {
  return (
    <nav className="z-10 px-5 xl:p-0 w-full  bg-primary fixed sm:hidden bottom-0">
      <div className="max-w-7xl text-black h-[50px] flex justify-between items-center mx-auto w-full">
        <Link href="/#projects">Projects</Link>
        <Link href="/#about">About me</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/#contact">Contact</Link>
      </div>
    </nav>
  );
}

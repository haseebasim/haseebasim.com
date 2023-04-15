import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="nav-container px-10 xl:p-0 w-full h-max absolute inset-0 mt-5">
      <div className="max-w-7xl text-white  flex justify-between items-center mx-auto w-full">
        <div>
          <Image loading="lazy" alt="nav-brand" src="/icons/HA.svg" width={60} height={60} />
        </div>
        <div className="hidden sm:flex capitalize text-base  gap-x-16">
          <Link href="/#projects" className="hover:text-primary transition-colors duration-300">
            Projects
          </Link>
          <Link href="/#about" className="hover:text-primary transition-colors duration-300">
            About me
          </Link>
          <Link href="/#experience" className="hover:text-primary transition-colors duration-300">
            Experience
          </Link>
          <Link href="/blogs" className="hover:text-primary transition-colors duration-300">
            Blogs
          </Link>
          <Link href="/#contact" className="hover:text-primary transition-colors duration-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

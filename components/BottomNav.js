export default function BottomNav() {
  return (
    <nav className="z-10 px-5 xl:p-0 w-full  bg-primary fixed sm:hidden bottom-0">
      <div className="max-w-7xl text-black h-[50px] flex justify-between items-center mx-auto w-full">
        <BottomNavLink href="/#projects">Projects</BottomNavLink>
        <BottomNavLink href="/#about">About me</BottomNavLink>
        <BottomNavLink href="/blogs">Blogs</BottomNavLink>
        <BottomNavLink href="/#contact">Contact</BottomNavLink>
      </div>
    </nav>
  );
}

const BottomNavLink = ({ href, children }) => {
  return (
    <a className="h-full flex items-center" href={href}>
      {children}
    </a>
  );
};

import CustomLink from './common/CustomLink';

export default function Footer() {
  return (
    <div className=" sm:px-10 xl:px-0 hidden w-full sm:flex justify-between items-center max-w-7xl mx-auto text-white h-16">
      <p>Developed by Haseeb Asim</p>
      <div className="flex gap-x-4">
        <CustomLink href="mailto:haseebzaidi321@gmail.com" img="/icons/email_link_icon.svg" />
        <CustomLink href="https://github.com/haseebasim" img="/icons/github_icon.svg" />
        <CustomLink href="https://www.linkedin.com/in/haseebrz/" img="/icons/linkedin_icon.svg" />
      </div>
    </div>
  );
}

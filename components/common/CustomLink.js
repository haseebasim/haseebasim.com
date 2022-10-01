import Image from "next/image";

export default function CustomLink({href, img}) {
  return (
    <a href={href} className="link-hover" target="_blank" rel="noreferrer">
      <Image loading="lazy" src={img} alt="" height={32} width={32} />
      <div className="border-b-2 transition-all duration-300 border-primary w-0"></div>
    </a>
  );
}

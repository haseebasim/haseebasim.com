import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({ title, description, datePosted, img, fileName }) {
  return (
    <div className="grid lg:grid-cols-2 gap-x-20 rounded">
      <div className="relative rounded-md w-full h-64 lg:h-auto ">
        <Image src={img} alt={title} className="rounded-md" layout="fill" />
      </div>
      <div className="py-[30px] flex flex-col gap-y-8 ">
        <div className="flex flex-col gap-y-4">
          <p className="text-xs text-primary">{datePosted}</p>
          <p className="text-2xl">{title}</p>
          <p className="text-base">{description}</p>
        </div>
        <Link href={`/blogs/${fileName}`}>
          <a className="w-fit flex items-center gap-x-2 text-sm hover:text-primary duration-300 transition-colors">
            Read More
          </a>
        </Link>
      </div>
    </div>
  );
}

import fs from 'fs';
import * as matter from 'gray-matter';
import path from 'path';

import BlogCard from '../../components/BlogCard';
import Nav from '../../components/Nav';
import Section from '../../components/Section';

export default function BlogListing({ blogList }) {
  return (
    <>
      <Nav />
      <Section>
        <h1 className="text-6xl text-center font-bold">Blogs</h1>
        <div className="py-32 max-w-5xl mx-auto">
          {blogList.map((blog, index) => {
            return <BlogCard key={index} {...blog} />;
          })}
        </div>
      </Section>
    </>
  );
}

export async function getStaticProps() {
  const directoryPath = path.join(process.cwd(), 'util/blogs');
  const fileNames = fs.readdirSync(directoryPath);
  const promises = fileNames.map(async (fileName) => {
    const source = (
      await fs.promises.readFile(path.join(process.cwd(), `util/blogs/${fileName}`))
    ).toString();

    const {
      data: { title, description, date, featuredImage }
    } = matter(source);

    const slug = fileName.replace(/\.md$/, '');

    return { title, description, datePosted: date, img: featuredImage, fileName: slug };
  });

  const blogList = await Promise.all(promises);

  return { props: { blogList } };
}

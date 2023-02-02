import fs from 'fs';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import rehypePrism from 'rehype-prism-plus';

import BottomNav from '../../components/BottomNav';
import Meta from '../../components/Meta';
import Nav from '../../components/Nav';
import Section from '../../components/Section';

const components = {};

export default function TestPage({ source }) {
  return (
    source && (
      <>
        <Meta title={source.frontmatter.title} route={`/blogs/${source.frontmatter.title}`} />
        <Nav />
        <BottomNav />
        <Section>
          <div className="relative mb-10 mt-20 xl:mt-0 flex gap-y-2 flex-col">
            <div className="relative w-full h-96 lg:h-[522px] rounded-md">
              <Image
                className="blog-header-img rounded-md"
                src={source.frontmatter.featuredImage}
                alt={source.frontmatter.title}
                layout="fill"
              />
              <div className="absolute flex flex-col justify-center items-center inset-0 bg-[#252B2F] bg-opacity-50 w-full h-full ">
                <div className="sm:w-3/4 lg:w-2/4 px-2 text-center">
                  <p className="font-semibold text-3xl sm:text-4xl  leading-snug ">
                    {source.frontmatter.title}
                  </p>
                  <p className="mt-6">{source.frontmatter.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="markdown-wrapper">
            <MDXRemote {...source} components={components} />
          </div>
        </Section>
      </>
    )
  );
}

export async function getStaticPaths() {
  const directoryPath = path.join(process.cwd(), 'util/blogs');
  if (fs.existsSync(directoryPath))
    return {
      paths: [{ params: { slug: 'undefined' } }],
      fallback: false
    };

  const fileNames = fs.readdirSync(directoryPath);
  const blogList = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    return {
      params: { slug }
    };
  });

  return {
    paths: blogList,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  if (params.slug === 'undefined') return { props: {} };
  const source = (
    await fs.promises.readFile(path.join(process.cwd(), `util/blogs/${params.slug}.md`))
  ).toString();

  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      // remarkPlugins: [smartypants],
      rehypePlugins: [rehypePrism]
    }
  });

  return { props: { source: JSON.parse(JSON.stringify(mdxSource)) } };
}

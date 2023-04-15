import fs from 'fs';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';

import BottomNav from '../../components/BottomNav';
import { Heading, Para } from '../../components/MdxComponents';
import Meta from '../../components/Meta';
import Nav from '../../components/Nav';
import Section from '../../components/Section';

const components = {
  h1: Heading.H1,
  h2: Heading.H2,
  p: Para
};

export default function TestPage({ source }) {
  return (
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
        <article className="text-base lg:w-4/5 mx-auto mdx-wrapper">
          <MDXRemote {...source} components={components} />
        </article>
      </Section>
    </>
  );
}

export async function getStaticPaths() {
  const directoryPath = path.join(process.cwd(), 'content');
  const fileNames = fs.readdirSync(directoryPath);
  const blogList = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');

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
  const source = (
    await fs.promises.readFile(path.join(process.cwd(), `content/${params.slug}.mdx`))
  ).toString();

  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      format: 'mdx',
      rehypePlugins: [rehypeCodeTitles, rehypePrism],
      remarkPlugins: [remarkGfm]
    }
  });

  return { props: { source: JSON.parse(JSON.stringify(mdxSource)) } };
}

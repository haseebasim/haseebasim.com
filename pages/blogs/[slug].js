import fs from 'fs';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import rehypePrism from 'rehype-prism-plus';

import Section from '../../components/Section';

const components = {};

export default function TestPage({ source }) {
  return (
    <Section>
      <div className="mb-10 flex gap-y-2 flex-col">
        <h1 className="text-4xl">{source.frontmatter.title}</h1>
        <p className="text-sm text-primary">{source.frontmatter.date}</p>
      </div>
      <div className="markdown-wrapper">
        <MDXRemote {...source} components={components} />
      </div>
    </Section>
  );
}

export async function getStaticPaths() {
  const directoryPath = path.join(process.cwd(), 'util/blogs');
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

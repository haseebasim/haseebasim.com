import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import smartypants from "remark-smartypants";
import rehypePrism from "rehype-prism-plus";
import fs from "fs";
import path from "path";
import Section from "../../components/Section";

const components = {};

export default function TestPage({ source }) {
  return (
    <Section>
      <MDXRemote {...source} components={components} />
    </Section>
  );
}

export async function getStaticPaths() {
  const directoryPath = path.join(process.cwd(), "util/blogs");
  const fileNames = fs.readdirSync(directoryPath);
  const blogList = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    return {
      params: { slug },
    };
  });

  return {
    paths: blogList,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const source = (
    await fs.promises.readFile(
      path.join(process.cwd(), `util/blogs/${params.slug}.md`)
    )
  ).toString();

  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      //   remarkPlugins: [smartypants],
      rehypePlugins: [rehypePrism],
    },
  });

  return { props: { source: JSON.parse(JSON.stringify(mdxSource)) } };
}
